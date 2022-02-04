import React from "react";

interface IProps {
    num: number;
}

class Image extends React.Component <IProps>{
    renderImg = () => {
        const {num} = this.props 
        
        if (num % 3 ==0 && num !) {
            return <img width={256} height={256} src="https://i.pinimg.com/564x/12/68/c5/1268c55ed5356d8b332781e26a49b871.jpg"/>
        }
        return null;
    }
    render() {
        return this.renderImg( 
        )
        
    }
}

export default Image;