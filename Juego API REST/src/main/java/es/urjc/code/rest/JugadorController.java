package es.urjc.code.rest;

import java.util.ArrayList;
import java.util.Collections;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JugadorController {
    ArrayList<Jugador> jugadores = new ArrayList<>();
    
        
    @GetMapping(value="/puntuaciones")
    public ArrayList<Jugador> getJugadores() {
        ordenarJugadores();
        return jugadores;
    }
        
    @PostMapping(value="/setJugador")
    @ResponseStatus(HttpStatus.CREATED)
    public void setJugador(@RequestBody Jugador j){
        jugadores.add(j);
    }
    
    @GetMapping(value="/getNombre/{id}")
    public String getNombre(@PathVariable int id){
        return jugadores.get(id).getName();
    }
   
   public void ordenarJugadores(){
        Collections.sort(jugadores, (Jugador j1, Jugador j2) -> new Integer(j2.getPuntuacion()).compareTo(new Integer(j1.getPuntuacion())));        
    }
    
    public void meterJugadores(){
        Jugador a = new Jugador("pepe",0);
        jugadores.add(a);
    }
}
