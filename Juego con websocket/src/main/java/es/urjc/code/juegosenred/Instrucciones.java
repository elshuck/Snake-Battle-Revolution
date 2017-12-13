/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package es.urjc.code.juegosenred;

import org.springframework.web.socket.WebSocketSession;

/**
 *
 * @author elshuck
 */
public class Instrucciones {
    private String instruccion;
    private float[] posicion;
    private WebSocketSession sesion;
    
    public Instrucciones(){
    }
    
    public String getInstruccion() {
        return instruccion;
    }

    public void setIntruccion(String i) {
	this.instruccion = i;
    }
        
    public float[] getPosicon() {
	return posicion;
    }

    public void setPuntuacion(float[] p) {
	this.posicion = p;
    }
    
    public float[] getSesion() {
	return posicion;
    }
   
}
