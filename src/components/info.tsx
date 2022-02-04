import React from "react";

interface IProps {
    nama : String;
    kelas : String;
    isMorning : Boolean;
}

class Info extends React.Component <IProps>{
    render() {
        return (
            <div>
                <h5>Nama{this.props.nama}</h5>
                <p>Kelas {this.props.kelas}</p>
                <p>pagi / siang: {this.props.isMorning}</p>
            </div>
        )
        
    }
}

export default Info;