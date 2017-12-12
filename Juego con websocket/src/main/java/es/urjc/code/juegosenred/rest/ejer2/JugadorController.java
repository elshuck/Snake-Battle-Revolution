package es.urjc.code.juegosenred.rest.ejer2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
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
    HashMap<String, Jugador> jugadores = new HashMap<String, Jugador>();
    
    @GetMapping(value="/getPuntuacion/{id}")
    public int getPuntuacion(@PathVariable String id) {
        return jugadores.get(id).getPuntuacion();
    }
        
    @PostMapping(value="/setJugador")
    @ResponseStatus(HttpStatus.CREATED)
    public void setJugador(@RequestBody Jugador j){
        jugadores.put(j.getName(), j);
    }
    
    @PostMapping(value="/setPuntuacion")
    @ResponseStatus(HttpStatus.CREATED)
    public void setPuntuacion(@RequestBody Jugador j){
        jugadores.get(j.getName()).setPuntuacion(j.getPuntuacion());
    }
    
    public void meterJugadores(){
        Jugador a = new Jugador("pepe",0);
        jugadores.put(a.getName(), a);
    }
}
