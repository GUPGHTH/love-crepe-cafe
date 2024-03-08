import React, { useState, useEffect } from "react";
// import Style from "../Listmenu/Listmenu.module.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Addanddel from "../components/addanddel/addanddel";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const menulist = [{ num: 1, name: "Padthai", price: 200 }, { num: 2, name: "Cake", price: 300 }, { num: 3, name: "Coke", price: 100 }];




export default function Listmenu() {

    const { lang } = useParams();

    const [menulist_us, setmenulist_us] = useState([]);

    useEffect(() => {
        getmenulist(lang);
    }, [])

    const getmenulist = async (lang) => {
        try {
            const res = await axios.post('http://localhost:5177/getmenu', {
                lang: lang
            });
            setmenulist_us(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    // setmenulist_us(menulist);

    return (
        <Container className="my-4">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>princt</th>
                        <th>amount</th>
                    </tr>
                </thead>

                <tbody>

                    {menulist_us.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.num}</td>
                                <td>{val.Name}</td>
                                <td>{val.Price}&nbsp;&nbsp; ₩</td>
                                <td><Addanddel /></td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </Table>
        </Container>
    );
}
