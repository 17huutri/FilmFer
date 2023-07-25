import React from 'react'
import { Data } from '../shared/ListOfFilms'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'

export default function Film() {
  <Container>
    <Row>
  Data.map( =>(<Col><Card></Card></Col>))
    </Row>
  </Container>
  const [film, setFilm] = useState([])
  return (
    <div className='container'>
      {Data.map((film) => (
        <div className='column'>
          <div className='card'>
            <img src={film.img} />
            <h3>{film.title}</h3>
            <p className='title'>{film.year}</p>
            <div class="click-action">
              <p><button onClick={() => { setFilm(film) }}><a href='#popup1' id='openPopUp'>Click Here!</a></button></p>
            </div>
            <div class="item-action"> <Link to={`detail/${film.id}`}>


              <a href="#" class="btn btn-hover">
                <i class="bx bxs-right-arrow"></i>
                <span>Watch now</span>
              </a>

            </Link>
            </div>
          </div>
        </div>

      ))}
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <img src={film.img} />
          <h2>{film.name}</h2>
          <a className='close' href="#">&times;</a>


        </div>
      </div>
    </div>
  )
}






