package es.urjc.code.juegosenred;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import static java.lang.Integer.parseInt;

public class Handler extends TextWebSocketHandler {

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
        
        Gson gson = new Gson();//recomendacion dle medcio
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
            System.out.println("Abierta sesión de usuario (data): " + session.getId());
            sessions.put(session.getId(), session); //Se mete la nueva sesión en el hashmap
            
                        
            
            String[] datos = new String[2];
            datos[0] = "0";
            datos[1] = session.getId();

            session.sendMessage(new TextMessage(gson.toJson(datos, String[].class)));

            /*String aux = gson.toJson(mapa, int[][].class);
            enviarMapa(session, aux);

            aux = gson.toJson(mapaBonificadores, int[][].class);
            enviarMapaB(session, aux);

            int sesionInt = Integer.parseInt(session.getId(), 16);
            if (sesionInt < 8) {
                lJugWS.add(parseInt(session.getId()), "...");
            }
            enviarListaNombres();*/
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		System.out.println("Message received: " + message.getPayload());
		
		Instrucciones instruccion = gson.fromJson(message.getPayload(), Instrucciones.class);
                
                //esto es lo que tenemos que modificar para el mensaje y tal al recibir el mensaje decirle a esto que coño hacer con su vida
                switch(instruccion.getInstruccion()){
                    case "1":
                        break;
                    default:
                        break;
                }
                
		sendOtherParticipants(session, node);
	}

	private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws IOException {

		System.out.println("Message sent: " + node.toString());
		
		ObjectNode newNode = mapper.createObjectNode();
		newNode.put("name", node.get("name").asText());
		newNode.put("message", node.get("message").asText());
		
		
		for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(newNode.toString()));
			}
		}
	}

}
