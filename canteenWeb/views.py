from django.shortcuts import render
from rest_framework import viewsets, permissions, status, views
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404
from . import choices
from .models import MenuItem, Order
from .serializers import MenuItemSerializer, OrderSerializer

# Create your views here.
class MenuItemList(views.APIView):
    def get(self, request):
        menu_item = MenuItem.objects.all()
        serializer = MenuItemSerializer(menu_item, many=True)
        return Response(serializer.data)


class AddMenuItem(views.APIView):
    def post(self, request):
        serializer = MenuItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MenuItemDetails(views.APIView):
    def get_object(self, id):
        try:
            return MenuItem.objects.get(id=id)
        except MenuItem.DoesNotExist:
            raise Http404

    def get(self, request, *args, **kwargs):
        menu_item_id = kwargs["menu_item_id"]
        menu_item = self.get_object(id=menu_item_id)
        serializer = MenuItemSerializer(menu_item)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        menu_item_id = kwargs["menu_item_id"]
        menu_item = self.get_object(id=menu_item_id)
        serializer = MenuItemSerializer(menu_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    # TODO: Add permissions.

    @action(detail=True, methods=["get", "post"])  # TODO: Remove get
    def accept(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Preparing"]
        order.save()
        return Response({"message": "Order accepted"})

    @action(detail=True, methods=["get", "post"])  # TODO: Remove get
    def reject(self, request, pk=None):
        order = self.get_object()
        order.status = choices.STATUS_DICTIONARY["Rejected by Canteen"]
        order.save()
        return Response({"message": "Order rejected"})

    @action(detail=False)
    def completed(self, request):
        completed_orders = Order.objects.filter(is_fulfilled=True)
        serializer = self.get_serializer(completed_orders, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def pending(self, request):
        pending_orders = Order.objects.filter(
            is_fulfilled=False, status__gte=0
        )  # Should not be fulfilled and status should be positive.
        serializer = self.get_serializer(pending_orders, many=True)
        return Response(serializer.data)

    @action(detail=False)
    def status_options(self, request):
        return Response(choices.STATUS_DICTIONARY)

    @action(detail=True, methods=["get", "post"])
    def change_status(self, request, pk=None):
        order = self.get_object()
        data = request.data
        if "status" in data:
            if int(data["status"]) in choices.STATUS_DICTIONARY_REVERSE:
                order.status = int(data["status"])
                order.save()
                return Response(
                    {
                        "message": "Order status changed",
                        "status": choices.STATUS_DICTIONARY_REVERSE[order.status],
                    }
                )
            else:
                return Response(
                    {"error": "Status not recognised", "status": data["status"]},
                    status.HTTP_400_BAD_REQUEST,
                )
        else:
            return Response(
                {"error": "Missing status in request body"}, status.HTTP_400_BAD_REQUEST
            )
