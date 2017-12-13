/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package es.urjc.code.juegosenred;

/**
 *
 * @author elshuck
 */
public class Posiciones {
    private float[] posiciones;
    //Con dos posiciones coges una posicion
    
    float[] getPosicion(){
        return posiciones;
    }
    
    void setPosicion(float[] newPosiciones){
        posiciones = newPosiciones;
    }
}
