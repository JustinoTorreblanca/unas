import React, {useState} from "react";
import NavbarNegroDesktop from "./DesktopNavBar";
import "./PasosAgendar.scss";
import FooterDesktop from "./DesktopFooter";
import flechapasos from "../images/iconopasos.png";
/* import CalendarComponent from "./CalendarComponent"; */
/* import { useForm } from 'react-hook-form'; */

import CardMetodoPago from "./CardMetodoPago";
import CardDomicilio from "./CardDomicilio";

import PopUpOtraPersona from "./PopUpOtraPersona";
import PopUpAgregarOtraPersona from "./AgregrarPersPopUp"
import Calendar from "./Calendar"
import moment from "moment";
import NuevoRegistro from "./NuevoRegistro";
import { Link } from "react-router-dom";


function PasosAgendar() {
  const [form, setForm] = useState({  });
  const [value, setValue] = useState(moment());
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }


/* const handleInputChange = (event) =>{
  setDatos({
    ...datos,
    [event.target.name] : event.target.value
  })
}

const enviarDatos = (event) => {
  event.preventDefault();
  console.log({datos})
}
 */

  return (
    <div className="agendar-container">
      <NavbarNegroDesktop className="navbar-desktop-pasos" />
      <div className="container-pasos">
        <div className="zona">
          <span className="titulo-zona">¿En qué zona te encuentras?</span>
          <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
        </div>

        <div className="wrap-radio-buttons">
          <form className="form-zona" /* onSubmit={enviarDatos} */>
            <div className="primera-seccion">
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="polanco"
                value="Polanco"
                onChange={handleChange}
              />
              <label htmlFor="polanco">Polanco</label>
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="lomas"
                value="Lomas"
                onChange={handleChange}
              />
              <label htmlFor="lomas">Lomas</label>
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="santafe"
                value="Santa Fe"
                onChange={handleChange}
              />
              <label htmlFor="santafe">Santa Fé</label>
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="condesa"
                value="Condesa"
                onChange={handleChange}
              />
              <label htmlFor="condesa">Condesa</label>
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="bosques"
                value="Bosques"
                onChange={handleChange}
              />
              <label htmlFor="bosques">Bosques</label>
            </div>

            <div className="segunda-seccion">
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="interlomas"
                value="Interlomas"
                onChange={handleChange}
              />
              <label htmlFor="interlomas">Interlomas</label>
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="tecamachalco"
                value="Tecamachalco"
                onChange={handleChange}
              />
              <label htmlFor="tecamachalco">Tecamachalco</label>
              <input
                type="radio"
                className="radio-button"
                name="zona"
                id="olivo"
                value="Olivo"
                onChange={handleChange}
              />
              <label htmlFor="olivo">El Olivo</label>
            </div>
            <div className="tercera-seccion">
              <input
                type="radio"
                value="El Chamizal"
                className="radio-button"
                id="chamizal"
                name="zona"
                onChange={handleChange}
              />
              <label htmlFor="chamizal">El Chamizal</label>
              <input
                type="radio"
                value="Plaza Carzo"
                className="radio-button"
                id="carzo"
                name="zona"
                onChange={handleChange}
              />
              <label htmlFor="carzo">Plaza Carzo</label>
            </div>
          </form>
        </div>
      </div>

      <div className="container-dia">
        <div className="zona-dia">
          <span className="titulo-dia">¿Qué día quieres agendar?</span>
          <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
        </div>
        <div className="wrap-calendar">
          {/* <CalendarComponent /> */}

          <Calendar value={value} onChange={setValue} />
        </div>
      </div>

      <div className="container-registro">
        <div className="registro-persona">
          <span className="titulo-registro">Registro de las personas</span>
          <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
        </div>
        <div className="wrap-nombre">
          <div className="nombre-cliente-container">
            <h1 className="nombre-cliente">Nombre cliente Clou</h1>

            <PopUpOtraPersona  handleChange={handleChange} setVisible={setVisible}/>


          </div>
          <form className="form-servicio">
            <label className="dropdown-servicio">Servicio*</label>
            <select
              className="opciones-servicio"
              defaultValue=""
              onChange={handleChange}
              name="servicio"
            >
              <option value="">- - -</option>
              <option value="Spa polish">Combo Spa Polish</option>
              <option value="Spa gel">Combo Spa Gel</option>
              <option value="Spa mix">Combo Spa Mix</option>
              <option value="Combo spa">Combo Spa</option>
            </select>
            <br></br>
          </form>
          <div className="wrap-horario">
            <div className="contenedor-horario">
              <label className="dropdown-horario">Horario</label>
              <select
                className="opciones-horario"
                defaultValue=""
                onChange={handleChange}
                name="horario"
              >
                <option value="">- - -</option>
                <option value="14">14:00hrs</option>
                <option value="15">15:00hrs</option>
                <option value="16">16:00hrs</option>
                <option value="17">17:00hrs</option>
                <option value="18">18:00hrs</option>
                <option value="19">19:00hrs</option>
                <option value="20">20:00hrs</option>
              </select>
            </div>

            <div className="contenedor-quien">
              <label className="dropdown-quien">
                ¿Quién me dará el servicio?*
              </label>
              <select
                className="opciones-quien"
                defaultValue=""
                onChange={handleChange}
                name="quien"
              >
                <option value="">- - -</option>
                <option value="Elisa">Elisa</option>
                <option value="Alejandra">Alejandra</option>
                <option value="Angeles">Angeles</option>
                <option value="Dani">Dani</option>
              </select>
            </div>
          </div>
          {visible ? <NuevoRegistro setVisible={setVisible} handleChange={handleChange}/> : null}

         {/*  <NuevoRegistro /> */}
          <PopUpAgregarOtraPersona  handleChange={handleChange} setVisible={setVisible}/>
        </div>
      </div>
      <div className="es-regalo">
        <p className="regalo-txt">¿Es un regalo?</p>
        <form className="si-no">
          <input
            type="radio"
            value="si"
            className="radio-button"
            id="si"
            onChange={handleChange}
            name="regalo"
          />
          <label htmlFor="si" className="si-regalo">
            Si
          </label>
          <input
            type="radio"
            value="no"
            className="radio-button"
            name="regalo"
            onChange={handleChange}
            id="no"
          />
          <label htmlFor="no">No</label>
        </form>
      </div>

      {/* DATOS PARA REGALO */}
      <div className="container-datos-regalo">
        <form /* onSubmit={handleSubmit(onSubmit)} */>
          <div className="zona-dia">
            <span className="titulo-dia titulo-regalo">Datos para regalo</span>
            <img src={flechapasos} alt="flecha" className="flecha-pasos"></img>
          </div>
          <div className="wrap-pasos-regalo">
            <div className="container-nombre-regalo">
              <label className="nombre-pasos-regalo">Nombre</label>
              <input
                type="text"
                className="nombre-regalo-inpt"
                name="nombre para regalo"
                onChange={
                  handleChange
                } /* ref={register({required: {value: true, message: 'Campo Requerido'}})} */
              ></input>
              {/* <div>
              {errors?.name?.message}
            </div> */}
            </div>
            <div className="container-correo-pasos">
              <label className="correo-pasos-regalo">Correo electrónico*</label>
              <input
                className="correo-regalo-inpt"
                name="email para regalo"
                onChange={
                  handleChange
                } /* ref={register({required: {value: true, message: 'Campo Requerido'}})} */
              ></input>
              {/* <div>
              {errors?.email?.message}
            </div> */}
            </div>
          </div>
          <div className="container-direccion-pasos">
            <label className="direccion-regalo">Dirección</label>
            <input
              className="direccion-regalo-inpt"
              name="direccion para regalo"
              onChange={
                handleChange
              } /* ref={register({required: {value: true, message: 'Campo Requerido'}})} */
            />
            {/* <div>
              {errors?.address?.message}
            </div> */}
          </div>
        </form>
      </div>

      {/* METODO DE PAGO */}
      <CardMetodoPago handleChange={handleChange} />

      {/* DOMICILIO */}
      <CardDomicilio handleChange={handleChange} />

      <div className="cont-boton-guardar">
        {/* <a href="/" className="anchor-pasos"> */}
        <Link to="confirmacion">
        <input
          type="submit"
          className="agendar-guardar-pasos"
          value="Guardar y agendar cita"
        />
        </Link>
        {/*  </a> */}
      </div>

      <FooterDesktop />
    </div>
  );
}

export default PasosAgendar;
