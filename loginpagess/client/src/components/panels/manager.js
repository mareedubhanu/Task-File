import React from 'react';
import "antd/dist/antd.css"
import store from '../../services/reducers/store';
import { Table } from 'antd';



class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%',

        }, {
            title: 'task',
            dataIndex: 'task',

        },];

        this.state = {
            dataSource: JSON.parse(localStorage.getItem('arr')),
            count: 0,
        };
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div style={{ padding: "10px 20px" }}>
                <p style={{ fontSize: "1.4em" }}>Name:{localStorage.getItem('name2')}</p>
                <p style={{ fontSize: "1.4em" }}>Designation:{localStorage.getItem('designation')}</p>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}




export default Manager;




