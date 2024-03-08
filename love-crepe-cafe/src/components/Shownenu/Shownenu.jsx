import React from "react";
import styles from "./Shownenu.module.css";
import img1 from "../../img/logo.png";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addanddel from '../addanddel/addanddel.jsx';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from "axios";

export default function Shownenu() {
  const { lang } = useParams();

  const [menulist_us, setmenulist_us] = useState([]);

  useEffect(() => {
    getmenulist(lang);
  }, [])

  const getmenulist = async (lang) => {
    try {
      const res = await Axios.post('http://localhost:5177/getmenu', {
        lang: lang
      });
      setmenulist_us(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container fluid>
      <h3>All menu</h3>
      <Row>


        {menulist_us.map((val, key) => {
          return (
            <Col>
              <div className={styles.box}>
                <div className={styles.card}>
                  <div className={styles.boximg}><img src={img1} alt="img1" /></div>
                  <div className={styles.namemanu}><p>{val.Name}</p></div>
                  <div class={styles.container}>
                    <div class={styles.price}><p>{val.Price} ₩</p></div>
                    <div className={styles.quantity}><Addanddel /></div>
                  </div>
                </div>
              </div>
            </Col>
          )
        })}

      </Row>

    </Container>
  );
}
