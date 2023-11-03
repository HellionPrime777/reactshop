import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { TelephoneFill, PersonCircle, HeartFill, Cart3, ArrowRight } from 'react-bootstrap-icons';

function Info() {
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">Ваш логотип</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/"><TelephoneFill /> +1234567890</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <PersonCircle /> Обліковий запис
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                      <li><a className="dropdown-item" href="/">Вхід</a></li>
                      <li><a className="dropdown-item" href="/">Реєстрація</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/"><HeartFill /> Список побажань</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/"><Cart3 /> Кошик</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/"><ArrowRight /> Оформити замовлення</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
export default Info;