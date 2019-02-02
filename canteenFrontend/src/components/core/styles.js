const styles = {
    // For Pending Card:
    box: {
        backgroundColor: "E9E9E9",

        width: 350,
        height: 90,
        borderRadius: 5,
        padding: 10,
        margin: "auto",

    },
    indicator: {
        height: "100%",
        width: "3.5%",
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: "#FFD73F",
        float: "left",
    },
    content: {
        width: "22vw",
        paddingLeft:12,
        height: "100%",
        backgroundColor: "#EEEEEE",
        //float: "right",
        boxShadow: "5px 5px 7px #C0C0C0",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        alignContent:'center',
    },
    order: {
        backgroundColor: "#DDF3FD",
        height: "23%",
        borderTopRightRadius: 5,
        
       
    },
    item: {
        backgroundColor: "#FFFFFF",
        height: "77%",
        float: 'left',
        width: '80%',
        borderRight: "0.5px solid #D0D8DD",

    },
    tick_box: {
        backgroundColor: 'white',
        height: '77%',
        width: '19%',
       float: 'right',
        borderBottomRightRadius: 5,
        textAlign:'center',
        

    },
    tick:{
        
        width:30,
        height:30,
        marginTop:17,
        color:'#FFD73F',
        marginLeft:1,
        

    },
    attribute1: {
        marginTop: 7,
        marginLeft: 15,
        //marginRight: 7,
        height: '35%',
        backgroundColor: '#FFFFFF',
        width: '70%',
        float: 'left',
        fontWeight: "bold",

    },
    attribute2: {
        marginTop: 7,
       // marginLeft: 50,
        
        height: '35%',
        backgroundColor: 'white',
        width: '20%',
        float: 'left',
    },


    container: {
        backgroundColor: "E9E9E9",
        flexDirection: "column",
    },
    // For Item Card:
    box1: {
        textAlign: "Center",
        color: "#9E9E9E",
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: 100,
        borderRadius: 12,
        padding: 10,
        boxShadow: "12px 12px 16px #C0C0C0",
        margin: "auto",
        display:'flex',

    },
    item1: {
        position: "relative",
        backgroundColor: "#FFFFFF",
        height: "100%",
        float: 'left',
        width: '80%',
        textAlign: "center",
       // maxWidth: "25vw",
       display:'flex',
        
    },
    left_con:{
        height:'100%',
        float:'left',
        width:'65%',
        backgroundColor:'#FFFFFF'
    },
    right_con:{
        height:'100%',
        float:'right',
        width:'35%',
        backgroundColor:'#FFFFFF'
    },
    icon_trash: {
        width:55,
        height:40,
        float:'left',
        marginTop:20,
        color:'#858585',
       
        backgroundColor:'#FFFFFF'

    },
    icon_tick: {
        width:55,
        height:40,
        float:'left',
        marginTop:20,
        cursor: "grabbing",
        backgroundColor:'#FFFFFF',
        color:'#00C952',
        

    },

    attribute3: {
        marginTop: 5,
        marginLeft: 5,
        //marginRight: 7,
        height: '35%',
        backgroundColor: '#FFFFFF',
        width: '35%',
        float: 'left',
        fontWeight: "bold",
        textAlign:'center',
        color:'#C7C7C7',
    },
    attribute4: {
        marginTop: 5,
        marginLeft: 5,
        //marginRight: 7,
        height: '35%',
        backgroundColor: '#FFFFFF',
        width: '60%',
        float: 'left',
        fontWeight: "bold",
        textAlign:'center',
        color:'#C7C7C7',
        boxShadow: "0 1px 0px #e9e9e9",
    },
    attribute5: {
        marginTop: 35,
        marginLeft: 20,
        //marginRight: 7,
        height: '35%',
        backgroundColor: '#FFFFFF',
        width: '25%',
        float: 'left',
        fontWeight: "bold",
        textAlign:'center',
        color:'#C7C7C7',
    },
    attribute6: {
        marginTop: 35,
        marginLeft: 5,
        //marginRight: 7,
        height: '35%',
       backgroundColor: '#FFFFFF',
        width: '25%',
        float: 'left',
        fontWeight: "bold",
        textAlign:'center',
        color:'#C7C7C7',
        boxShadow: "0 1px 0px #e9e9e9",
    },
    edit_button:{
        backgroundColor:'#FFFFFF',
        width:110,
        height:30,
        marginTop:65,

    },

    wrap:{
        backgroundColor:'#FFFFFF',
        width:110,
        height:100,
        float:'left',

    },
   

    input: {
        border: "white",
        borderTop: "white",
        borderLeft: "white",
        marginLeft: 20,
        color: "#9E9E9E",
        boxShadow: "0 1px 0px #e9e9e9",
        backgroundColor:'yellow',

    },
    input2: {
        border: "white",
        borderTop: "white",
        borderLeft: "white",
        width: 50,
        marginLeft: 20,
        color: "#9E9E9E",
        boxShadow: "0 1px 0px #e9e9e9",
        backgroundColor:'blue'
    },
    

    nameinput: {
        marginTop: 7,
        marginLeft: 7,
    
        height: '35%',
        backgroundColor: 'white',
        width: '20%',
        float: 'left',
    },

    /*  attribute3: {
       fontWeight: "bold",
        marginTop: 7,
    marginLeft: 80,
        marginRight: 7,
        height: '35%',
        
        width: '70%',
        float: 'left',
        backgroundColor:'red',

    },
    attribute4: {
        position: "absolute",
        top: "50%",
        transform: "translateY(35%)",
        left: 350,
        fontWeight: "bold",
        height: '35%',
        width: '50%',
        float: 'left',
        backgroundColor:'grey',

    },

    attribute5: {
        marginTop: 7,
        marginLeft: 35,
        marginRight: 7,
        height: '35%',
        backgroundColor: 'white',
        // width: '70%',
        float: 'left',
        fontWeight: "bold",
        
    },*/
    head_category:{
        height:70,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:0
    },
    main_category: {
        fontSize: 27,
        paddingTop: 15,
        paddingLeft: 5,
        color: '#607D8B'
    },
    icon_plus:{
        float:'right',
        fontSize:30,
        color:'#019BE5',
        padding:10, 
        top: "0%", 
        transform: "translateY(-81%)"
    },
    sub_category:{
        borderRadius:0,
        height:55,
        paddingLeft:18,
        paddingRight:10,
        
    },
    item_category:{
        fontSize:20,
        color:'#607D8B',
        paddingTop:10,
        paddingLeft:5
   },
   icon_cross:{
    fontSize:24,
    color:'#E8453E',
    float:'right',
    padding:10,
    transform: "translateY(-74%)"
   }
};
export default styles;
