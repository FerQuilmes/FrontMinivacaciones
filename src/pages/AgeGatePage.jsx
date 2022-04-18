import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { logo, iconCarita } from "../assets";

// const urlAPI = 'http://localhost:3001'
const urlAPI = 'https://wapocazure-dev.azurewebsites.net'


const AgeGatePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ dataError, setDataError ] = useState(false);

  const onSubmit = async (data) => {
    const age= `${data.ageOne}${data.ageTwo}${data.ageThree}${data.ageFour}`
    try {
      let response = await fetch(`${urlAPI}/ageGate/${age}/20`)
      let res = await response.json()
      if (res.passed === true) {
        if (data.remember === true) {
          localStorage.setItem("ageGatePassed", JSON.stringify(res.passed));
        }
        else {
          sessionStorage.setItem("ageGatePassed", JSON.stringify(res.passed));
        }
        setDataError(false)
        window.location = '/home';
        //navigateTo('/home')
      }
      else{
        setDataError(true)
        //window.location = 'https://www.youtube.com/'
      }
    }
    catch {
      console.log("No Funcion la API")
    }
  }

  return (
    <div id="age-gate" className="centered">
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-2 offset-md-2">
            <div className="square mod-logo pos-404 pos-agegate">
              <img src={logo} />
            </div>
          </div>
          <div className="col-9 col-md-6">
            <div className="square mod-agegate title h-100">
              <h1>MINI VACACIONES</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h2 className="bt-inner">
              Para continuar debes ser mayor de edad.
              <span className="d-none d-md-inline">
                <span v-if="mode == 0">Ingresá tu año de nacimiento.</span>
              </span>
            </h2>
            <h2 className="bt-inner d-md-none">
              <span v-if="mode == 0">Ingresá tu año de nacimiento.</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 offset-md-5 d-flex flex-row flex-md-row-reverse flex-wrap">
            <form onSubmit={handleSubmit(onSubmit)} className="agegate-form bt-inner" id="idFormAgeGate">
              <div
                className="row no-gutters gate-fields flex-nowrap"
                v-if="mode == 0"
              >
                <div className="col-3">
                  <div className="form-group">
                    <input
                      {...register("ageOne", { maxLength: 1, min: 0, max: 9 })}
                      type="tel"
                      className="form-control"
                      placeholder="2"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <input
                      {...register("ageTwo", { maxLength: 1, min: 0, max: 9 })}
                      type="tel"
                      className="form-control"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <input
                      {...register("ageThree", { maxLength: 1, min: 0, max: 9 })}
                      type="tel"
                      className="form-control"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <input
                      {...register("ageFour", { maxLength: 1, min: 0, max: 9 })}
                      type="tel"
                      className="form-control"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
              { dataError === true ?
                <div className="text-center">
                  <span className="badge badge-danger mb-4">
                    <i className="fas fa-info-circle mr-2"></i>
                    La fecha ingresada es inválida
                  </span>
                </div>
              : null}
              <div className="row no-gutters">
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      {...register("remember")}
                      type="checkbox"
                      className="custom-control-input"
                    />
                    <label className="custom-control-label one-line" for="remember">
                      Recordar mis datos.
                    </label>
                  </div>
                </div>
                <p>
                  *No selecciones esta opción si compartes esta computadora con
                  menores de edad.
                </p>
                <button type="submit" className="btn btn-primary mt-4 w-100" form="idFormAgeGate">
                  INGRESÁ &nbsp;<i className="i-finger"></i>
                </button>
              </div>
            </form>
            <div className="square mod-icon smile-d bt-inner">
              <img src={iconCarita} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-9 offset-3 col-md-3 offset-md-2">
            <div className="square mod-agegate bt-inner">
              <p>
                SU CONSUMO EN EXCESO DAÑA LA SALUD, PROHIBIDA SU VENTA A MENORES
                DE 20 AÑOS.
                <br />
                Lo advierte el Ministerio de Salud Pública y Bienestar Social.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="square mod-agegate right">
              <p>
                Este sitio web utiliza cookies que se quedarán almacenadas en tu
                computadora con el fin de mejorar tu experiencia. Al
                proporcionar su fecha de nacimiento, también se acepta el uso de
                cookies. Para más información haga{" "}
                <a
                  href="https://www.skol.com.py/politicas"
                  target="_blank"
                  className="text-dark"
                >
                  clic aquí.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="skolfoz">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-12 d-flex flex-row flex-wrap">
              <a
                target="_blank"
                href="https://www.skol.com.py/terminos-y-condiciones"
              >
                Términos y condiciones
              </a>
              <a target="_blank" href="https://www.skol.com.py/politicas">
                Politicas de privacidad
              </a>
              <a target="_blank" href="https://www.skol.com.py/contacto">
                Contáctenos
              </a>
              <p>ANHEUSER-BUSCH INBEV © 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AgeGatePage;
