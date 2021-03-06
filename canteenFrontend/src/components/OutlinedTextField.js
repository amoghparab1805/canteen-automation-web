import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles/";
import axios from "axios";
import endpoint from "../util/client";
const styles = (theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
});

class OutlinedTextField extends React.Component {
    state = {
        data: [],
        multiline: "Controlled",
        open: false,
    };

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        const url = endpoint().directory('menu').toString();
        axios.post(url, {
          data: this.state.data,
        })
        .then(() => this.setState({ open: false }));
      };
    
    componentDidMount = async () => {
        const url = endpoint()
            .directory("menu")
            .toString();
            
        try {
            const response = await axios.get(url);
            this.setState({
                data: response.data,
            });
        } catch(e) {
            alert(`Couldn't GET /menu/ ERROR ${e}`);
        };
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete='off'>
                <TextField
                    id='outlined-textarea'
                    label='Name'
                    placeholder='Name'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                    value={this.state.data.name}
                    onChange={this.handleChange('name')}
                />
                <TextField
                    id='outlined-textarea'
                    label='price'
                    placeholder='price'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                    value={this.state.data.price}
                    onChange={this.handleChange('price')}
                />
                <TextField
                    id='outlined-textarea'
                    label='option'
                    placeholder='option'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                    value={this.state.data.options}
                    onChange={this.handleChange('option')}
                />
                <TextField
                    id='outlined-textarea'
                    label='Category'
                    placeholder='Category'
                    multiline
                    className={classes.textField}
                    margin='normal'
                    variant='outlined'
                    value={this.state.data.category}
                    onChange={this.handleChange('category')}
                />
                                         <Button
                                                onClick={this.handleSubmit}
                                                onClose={this.handleClose}
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
               
            </form>
        );
    }
}

OutlinedTextField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextField);
