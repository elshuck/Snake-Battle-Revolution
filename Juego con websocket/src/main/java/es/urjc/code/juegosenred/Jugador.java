package es.urjc.code.juegosenred;

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
        
        public boolean equals(Object o){ 
            Jugador j1 = (Jugador)o; 
            if(j1.getName()==this.getName()){ 
            //si tienen el mismo nombre es que son el mismo objeto 
                return true; 
            } 
            return false; 
        } 
}
