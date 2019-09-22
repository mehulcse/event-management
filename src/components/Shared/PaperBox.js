import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import theme from "../../utils/mui-theme";

const StyledPaper = styled(({ gutterBottom, ...rest }) => (
  <Paper {...rest} />
))({
  padding: theme.spacing(3, 2),
  marginBottom: (props) =>
    props.gutterBottom ? theme.spacing(2) : "inherit"
});

class PaperBox extends Component {
  render() {
    const { children, ...rest } = this.props;
    return <StyledPaper {...rest}>{children}</StyledPaper>;
  }
}

export default PaperBox;
