package es.urjc.code.rest;

import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JugadorController {
    ArrayList<Jugador> jugadores = new ArrayList<Jugador>();
    
        
    @GetMapping("/puntuaciones")
    public ArrayList<Jugador> anuncios() {
        meterJugadores();
        ordenarJugadores();
        return jugadores;
    }
        
    @PostMapping("/SetJugador")
    public void set(@RequestParam Jugador j){
        jugadores.add(j);       
    }
    
    public void ordenarJugadores(){
        int auxiliar;
        int auxiliar2;
        for(int i=0; i<jugadores.size();i++){
            for(int j=0; j<jugadores.size(); i++){
                auxiliar = jugadores.get(i).getPuntuacion();  
                auxiliar2 = jugadores.get(i+1).getPuntuacion();
                if(auxiliar2 > auxiliar){
                    jugadores[i] = jugadores[i+1];
                }
            }
        }
        
    }
    
    public void meterJugadores(){
        Jugador a = new Jugador("pene",5);
        Jugador b = new Jugador("marta",8);
        Jugador c = new Jugador("tren",2);
        Jugador d = new Jugador("escoliosis",15);
        jugadores.add(a);
        jugadores.add(b);
        jugadores.add(c);
        jugadores.add(d);
    }
    
    
}
