import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardInfo.css";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician")
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card-container">
          <img
            className="card-image"
            src={card.card_images[0].image_url}
            alt={card.name}
          />
          <div className="card-info">
            <h2 className="card-name">{card.name}</h2>
            <div className="info-container">
              <div className="info">
                <h3>Description</h3>
                <p>{card.desc}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faFolder} />
                </div>
              </div>
              <div className="info">
                <h3>Type</h3>
                <p>{card.type}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faRecordVinyl} />
                </div>
              </div>
              <div className="info">
                <h3>Attack</h3>
                <p>{card.atk}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faDumbbell} />
                </div>
              </div>
              <div className="info">
                <h3>Defense</h3>
                <p>{card.def}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
              </div>
              <div className="info">
                <h3>Level</h3>
                <p>{card.level}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faTurnUp} />
                </div>
              </div>
              <div className="info">
                <h3>Race</h3>
                <p>{card.race}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faReceipt} />
                </div>
              </div>
              <div className="info">
                <h3>Attribute</h3>
                <p>{card.attribute}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faMeteor} />
                </div>
              </div>
              <div className="info">
                <h3>Price</h3>
                <p>{card.card_prices[0].amazon_price}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </div>
              </div>
              <div className="info">
                <h3>Archetype</h3>
                <p>{card.archetype}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faBullseye} />
                </div>
              </div>
              <div className="info">
                <h3>SetCards 1</h3>
                <p>{card.card_sets[0].set_name}</p>
                <p>{card.card_sets[0].set_code}</p>
                <p>{card.card_sets[0].set_rarity}</p>
                <p>{card.card_sets[0].set_rarity_code}</p>
                <p>{card.card_sets[0].set_price}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
              <div className="info">
                <h3>SetCards 2</h3>
                <p>{card.card_sets[1].set_name}</p>
                <p>{card.card_sets[1].set_code}</p>
                <p>{card.card_sets[1].set_rarity}</p>
                <p>{card.card_sets[1].set_rarity_code}</p>
                <p>{card.card_sets[1].set_price}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
              <div className="info">
                <h3>SetCards 3</h3>
                <p>{card.card_sets[2].set_name}</p>
                <p>{card.card_sets[2].set_code}</p>
                <p>{card.card_sets[2].set_rarity}</p>
                <p>{card.card_sets[2].set_rarity_code}</p>
                <p>{card.card_sets[2].set_price}</p>
                <div className="contedor-des">
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
