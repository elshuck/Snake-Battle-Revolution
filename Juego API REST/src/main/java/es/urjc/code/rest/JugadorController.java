package es.urjc.code.rest;

import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JugadorController {
    ArrayList<Jugador> jugadores = new ArrayList<>();
    
        
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
        Comparator<Integer> comparador = Collections.reverseOrder();
        Collections.sort(arrayListInt, comparador);
        
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
