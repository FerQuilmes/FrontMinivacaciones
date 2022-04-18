import React from "react";
import { iconAll, imgBotellaPopup } from "../assets"

export default function Popup () {
  return(
    <div  className="modal" tabIndex="-1" role="dialog" id="modal-registro">
      <div  className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div  className="modal-content">
          <div  className="modal-body">
            <div  className="row no-gutters">
              <div  className="square mod-closebtn">
                <i  className="fa fa-close" data-dismiss="modal"></i>
              </div>
              <div  className="text-content-modal">
                <p>Ya estás participando</p>
                <p>Muy pronto anunciaremos</p>
                <p>Los ganadores</p>
                <p  className="last">
                  <img src={iconAll} />
                </p>
                <div  className="square bg-white mod-botellapop">
                  <img src={imgBotellaPopup} />
                </div>
                <button  className="btn btn-primary" href="#" data-dismiss="modal">
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};