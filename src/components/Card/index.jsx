import "./Card.css";

import React from 'react'

const Card = () => {
  return (
    <div
    className="Card"
    // onMouseEnter={this.startHover}
    // onMouseLeave={this.endHover}
  >
    <div 
    // onClick={this.openModal} 
    className="Card-Content-Text"
    >
      {/* <div className="Card-Text">{card.text}</div> */}
      <div className="Card-Text">texto</div>
    </div>

    {/* {card.dataDeadline !== "" && ( */}
      <div className="Card-Content-DeadLine"
        // onMouseEnter={this.endHover}
        // onMouseLeave={this.startHover}
      >
        <div 
        // onClick={this.updateActivityStatus}
          // className={`Card-DeadLine ${colorCheckBox(card)}`}>
          >
          <div className="form-check" >

            {/* {card.completed ?
              (<input className="form-check-input" type="checkbox"
                defaultChecked={true} />) :
              <input className="form-check-input" type="checkbox"
                defaultChecked={false} />} */}

            <div className="Card-DeadLine-Icon" >
              <ion-icon name="clock" />
            </div>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {/* {convertDateToPhrase(card.dataDeadline)} */}
            </label>
          </div>
        </div>
      </div>
    {/* )} */}

    <div>
      {/* {hover && ( */}
        <div className="Card-Icons"
        //  onClick={this.deleteCard}
        >
          <div className="Card-Icon">
            <ion-icon name="trash" />
          </div>
        </div>
      {/* )} */}
    </div>

    {/* {this.state.modalOpen ? this.renderPopup() : (false)} */}

  </div>
  )
}

export default Card;
