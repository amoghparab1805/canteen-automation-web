import React from "react";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import PendingColumn from "./core/PendingColumn";

import CategoryList from "./CategoryList";
import MenuItemList from "./MenuItemList";
import RoundSearchBar from "./RoundSearchBar";
import OutlinedTextFields from "./OutlinedTextFields";
import Footer from "./Footer";

import styles from "./core/styles";

import "./core/style.css";

class PermanentDrawerLeft extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div>
                <div className='wrapper'>
                    <div
                        className='nav'
                        style={{
                            width: "100%",
                            height: 70,
                            backgroundColor: "#FFFFFF",
                            borderBottom: "3px solid #D0D8DD",
                            textAlign: "center",
                        }}
                    >
                        <div style={{ display: "inline-block", marginTop: 10 }}>
                            <RoundSearchBar />
                        </div>
                    </div>

                    <div className='drawer'>
                        <div
                            className='left'
                            style={{
                                width: "20%",
                                float: "left",
                                backgroundColor: "white",
                                borderBottom: "3px solid #D0D8DD",
                                borderRight: "3px solid #D0D8DD",
                            }}
                        >
                            <div>
                                <Card style={styles.head_category}>
                                    <div>
                                        <div style={styles.main_category}>
                                            CATEGORIES
                                        </div>
                                        <span
                                            style={styles.icon_plus}
                                            className='fa fa-plus-circle'
                                            aria-hidden='true'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div>
                                <CategoryList />
                            </div>
                        </div>
                        <div
                            className='right'
                            style={{
                                float: "right",
                                width: "49.6%",
                                backgroundColor: "#DDF3FD",
                                borderBottom: "3px solid #D0D8DD",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: 65,
                                    backgroundColor: "#FFFFFF",
                                }}
                            >
                                <div
                                    style={{
                                        float: "left",
                                        width: "80%",
                                        height: 57,
                                    }}
                                >
                                    <h2 style={{ textAlign: "center" }}>
                                        ITEMS
                                    </h2>
                                </div>
                                <div
                                    style={{
                                        float: "right",
                                        width: "20%",
                                        height: 57,
                                    }}
                                >
                                    <button
                                        onClick={this.handleClickOpen}
                                        style={{
                                            marginTop: 18,
                                            borderRadius: 20,
                                            backgroundColor: "white",
                                            color: "#0477BD",
                                            borderColor: "#0477BD",
                                            padding: 7,
                                            width: 110,
                                            cursor: "pointer",
                                            textAlign: "center",
                                        }}
                                    >
                                        <strong>ADD ITEM</strong>
                                    </button>

                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby='form-dialog-title'
                                    >
                                        <div style={{ width: 400 }}>
                                            <DialogContent>
                                                <OutlinedTextFields />
                                            </DialogContent>
                                        </div>
                                        <DialogActions>
                                            <Button
                                                onClick={this.handleClose}
                                                style={{
                                                    backgroundColor: "#0477BD",
                                                    textAlign: "center",
                                                    color: "white",
                                                    borderRadius: 7,
                                                    width: 335,
                                                    right: 25,
                                                    bottom: 20,
                                                }}
                                            >
                                                ADD ITEM
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: 390,
                                    backgroundColor: "#DDF3FD",
                                    overflow: "auto",
                                }}
                            >
                                <MenuItemList />
                            </div>
                        </div>
                    </div>

                    <Footer total={12500} orderCount={150} />
                </div>
            </div>
        );
    }
}
export default PermanentDrawerLeft;
