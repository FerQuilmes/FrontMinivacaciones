import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { logo, iconCarita, iconCerveza, iconMano, iconAll, imgBotella, imgFoz, imgMobileFoz, imgSkol, imgMobileSkol, imgSkol2, imgMobileSkol2 }from "../assets";
import Navbar from '../containers/navbar'
import Footer from '../containers/footer'
import Popup from '../containers/popup'

const paraguayCities = [
 { value: 'asunción', placeholder: 'Asunción' },
 { value: 'concepción', placeholder: 'Concepción' },
 { value: 'sanPedro', placeholder: 'San Pedro'},
 { value: 'cordillera', placeholder: 'Cordillera' },
 { value: 'guaira', placeholder: 'Guairá' },
 { value: 'caaguazu', placeholder: 'Caaguazú' },
 { value: 'caazapa', placeholder: 'Caazapá' },
 { value: 'itapua', placeholder: 'Itapúa' },
 { value: 'misiones', placeholder: 'Misiones' },
 { value: 'paraguari', placeholder: 'Paraguarí' },
 { value: 'altoParana', placeholder: 'Alto Paraná' },
 { value: 'central', placeholder: 'Central' },
 { value: 'ñeembucu', placeholder: 'Ñeembucú' },
 { value: 'amambay', placeholder: 'Amambay' },
 { value: 'canindeyu', placeholder: 'Canindeyú' },
 { value: 'presidenteHayes', placeholder: 'Presidente Hayes' },
 { value: 'boqueron', placeholder: 'Boquerón' },
 { value: 'AltoParaguay', placeholder: 'Alto Paraguay' },
]

//const urlAPI = 'http://localhost:3001'
const urlAPI = 'https://wapocazure-dev.azurewebsites.net'

const HomePage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (data) => {
    console.log("data",data)
    setLoading(true);
    try {
      let response = await fetch(`${urlAPI}/form/minivacaciones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': '*/*'},
        body: JSON.stringify(data)
      })
      let res = await response.json()
      if (res.success === true) {
        console.log("res", res)
        setLoading(false);
        alert(`Ya estás participando
        Muy pronto anunciaremos
        Los ganadores`)
        setShowPopup(true);
      }
      else{
        setLoading(false);
      }
    }
    catch {
      setLoading(false);
      console.log("No Funcion la API")
    }
  }

  return (
    <>
    <Navbar />
    <div id="application" className="container">
      <section className="row">
        <div className="col-8 col-md-6 offset-md-1 no-gutter d-flex flex-column align-items-center">
          <div className="space d-none d-sm-block"></div>
          <div className="d-none w-100 d-sm-flex d-row justify-content-end">
            <div className="square mod-icon beer-a">
              <img src={iconCerveza} />
            </div>
            <div className="square mod-icon bg-white smile-a">
              <img src={iconCarita} />
            </div>
          </div>
          <div className="text-content-a align-self-end">
            <p>Participá y ganá unas</p>
            <p>mini vacaciones en</p>
            <p>foz do iguaçu</p>
            <p>para vos y un amigo</p>
          </div>
          <div className="w-100 d-none d-sm-flex d-row justify-content-between">
            <div className="square mod-logo bg-white pos-main">
              <img src={logo} />
            </div>
            <div className="square mod-icon bg-white hand-a">
              <img src={iconMano} />
            </div>
          </div>
          <div className="w-100 d-none d-sm-flex">
            <div className="square mod-icon smile-b">
              <img src={iconCarita} />
            </div>
            <div className="square mod-img-foz pos-main">
              <img src={imgFoz} />
            </div>
          </div>
        </div>
        <div className="col-9 offset-1 offset-sm-0 col-md-4 d-flex flex-row flex-wrap justify-content-end align-items-start">
          <div className="square mod-icon beer-a d-sm-none">
            <img src={iconCerveza} />
          </div>
          <div className="square mod-icon bg-white smile-a d-sm-none">
            <img src={iconCarita} />
          </div>
          <div className="square mod-img-botella pos-main">
            <img src={imgBotella} />
          </div>
        </div>
        <div className="col-11 offset-1 col-md-1 offset-sm-0 d-flex flex-row align-items-end justify-content-end">
          <div className="square mod-logo bg-white pos-main d-sm-none">
            <img src={logo} />
          </div>
          <div className="square mod-icon beer-c d-sm-none">
            <img src={iconCerveza} />
          </div>
          <div className="square mod-img-pareja pos-main">
            <img className="d-none d-sm-block" src={imgSkol} />
            <img className="d-block d-sm-none" src={imgMobileSkol} />
          </div>
        </div>
      </section>
      <section className="row flex-column-reverse flex-sm-row">
        <div className="col-12 col-md-4">
          <div className="space d-none d-sm-block"></div>
          <div className="d-flex flex-row flex-wrap justify-content-start justify-content-sm-end">
            <div className="square mod-img-playa">
              <img className="d-none d-sm-block" src={imgSkol2} />
              <img className="d-block d-sm-none" src={imgMobileSkol2} />
            </div>
            <div className="square mod-icon smile-c">
              <img src={iconCarita} />
            </div>
            <div className="square mod-icon blank bt-inner d-none d-sm-block"></div>
            <div className="square mod-icon beer-b bg-white bt-inner d-sm-none">
              <img src={iconCerveza} />
            </div>
          </div>
        </div>
        <div className="col-9 offset-3 d-flex flex-row d-sm-none">
          <div className="square mod-icon smile-b bg-white d-sm-none">
            <img src={iconCarita} />
          </div>
          <div className="square mod-icon beer-d">
            <img src={iconCerveza} />
          </div>
          <div className="square mod-img-foz pos-main d-sm-none">
            <img src={imgMobileFoz} />
          </div>
        </div>
        <div className="col-12 col-md-8" style={{ paddingLeft: '19px' }} >
          <div className="square bg-white bt-inner bb-none">
            <h1>Podés ganar</h1>
          </div>
          <div className="d-flex">
            <div className="square br-none one">
              <p>1</p>
              <p>viaje</p>
            </div>
            <div className="text-content-b">
              <p>A foz do iguaçu</p>
              <p>para 2 personas</p>
              <p>
                <img src={iconAll} />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="row">
        <div className="col-md-5 d-flex flex-row justify-content-end">
          <div className="text-content-c">
            <p>
              Ingresá tus datos{" "}
              <span className="d-inline d-sm-none">y cargá</span>
            </p>
            <p className="d-none d-sm-block">y cargá tu factura</p>
            <p>
              <span className="d-inline d-sm-none">tu factura </span>de compra
            </p>
            <p>
              POR LA COMPRA DE 1 PACK 275 DE SKOL GÁNATE UNO DE LOS DOS VIAJES A
              FOZ
              <br />
              para vos y un amigo. Mientras más facturas cargues, más
              oportunidades tenés de ganar.
            </p>
          </div>
          <div className="square mod-icon beer-b bg-white bt-inner d-none d-sm-flex">
            <img src={iconCerveza} />
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-2 mt-sm-0" id="idForm">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  {...register("name", {required: true, maxLength: 80})}
                  type="text"
                  className="form-control"
                  placeholder="Nombre y Apellido"
                />
              </div>
            </div>
            <div className="col-md-6 pr-sm-1">
              <div className="form-group">
                <input
                  {...register("cedula", {required: true, maxLength: 9})}
                  type="text"
                  className="form-control"
                  placeholder="Cédula"
                />
              </div>
            </div>
            <div className="col-md-6 pl-sm-1">
              <div className="form-group">
                <input
                  {...register("telefono", {required: true, maxLength: 12})}
                  type="tel"
                  className="form-control"
                  placeholder="Teléfono"
                />
              </div>
            </div>

            <div className="col-md-6 pr-sm-1">
              <div className="form-group">
                <input
                  {...register("email", {required: true})}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-md-6 pl-sm-1">
              <div className="form-group">
                <input
                  {...register("date", {required: true})}
                  type="text"
                  className="form-control"
                  placeholder="Fecha nacimiento (DD/MM/AAAA)"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <select
                  {...register("city", { required: true })}
                  type="text"
                  className="custom-select"
                  style={{ width: '-webkit-fill-available' }}
                >
                  <option value="">Ciudad</option>
                  {paraguayCities.map((x) => <option key={x.value} value={x.value}>{x.placeholder}</option>)}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <div className="custom-file custom-file-label" style={{ display: 'flex', width: '-webkit-fill-available', paddingRight: '0px', backgroundColor: 'white' }}>
                  <input
                    {...register("factura", {required: true})}
                    type="file"
                    id="facturaInput"
                    className="custom-file-input"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="facturaInput" style={{ marginRight: 'auto' }}>
                    {"Subir factura"}
                  </label>
                </div>
                <small id="factura-help" className="form-text">
                  <i className="i-info"></i> No te olvides que debes presentar
                  la factura para canjear el premio.
                </small>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select
                  {...register("respuesta", { required: true })}
                  className="custom-select"
                  style={{ width: '-webkit-fill-available' }}
                >
                  <option selected value="">
                    ¿Cuál es el momento ideal para disfrutar de tu Skol Abre
                    Fácil?
                  </option>
                  <option>En una pileteada</option>
                  <option>Asado con amig@s</option>
                  <option>En una fiesta/encuentro</option>
                  <option>En mi casa</option>
                </select>
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    {...register("accept", {required: true})}
                    type="checkbox"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="accept_tc">
                    He leído y aceptado las{" "}
                    <a href="/bases-y-condiciones" target="_blank">
                      Bases y Condiciones
                    </a>{" "}
                    y{" "}
                    <a href="https://www.skol.com.py/politicas" target="_blank">
                      la política de protección de datos personales
                    </a>
                    .
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    {...register("info")}
                    type="checkbox"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label one-line"
                    for="accept_mk"
                  >
                    Deseo recibir información comercial de Skol.
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary mt-4" form="idForm" data-toggle="modal" data-target="#modal-registro">
                {loading === true ?
                  <>
                    <span>ENVIANDO</span>
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </>
                : <>PARTICIPAR &nbsp;<i className="i-finger"></i></>}
              </button>
            </div>
          </form>
        </div>

        <div className="space d-none d-sm-block"></div>
      </section>

      <section className="row pb-5 d-none d-sm-flex">
        <div className="col-md-12 d-flex flex-row flex-wrap justify-content-center">
          <a
            className="btn btn-secondary"
            href="/bases-y-condiciones"
            target="_blank"
          >
            VER BASES Y CONDICIONES
          </a>
        </div>
      </section>
    </div>
    <Popup show={showPopup} handleHideModal={() => setShowPopup(false)} />
    <Footer />
    </>
  );
};

export default HomePage;
