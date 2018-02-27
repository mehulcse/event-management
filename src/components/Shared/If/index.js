const If = props => {
    if (props.condition) {
        return props.children;
    }
    return null;
};

export default If;
