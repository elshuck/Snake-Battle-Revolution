package es.urjc.code.rest;

public  class Jugador {
	
	private String name;
	private int puntuacion;
	
	public Jugador() {
	}
	
	public Jugador(String name, int puntuacion) {
		this.name = name;
		this.puntuacion = puntuacion;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
        
        public int getPuntuacion() {
		return puntuacion;
	}

	public void setPuntuacion(int puntuacion) {
		this.puntuacion = puntuacion;
	}
}
