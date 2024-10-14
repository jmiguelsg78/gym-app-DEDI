import './Hero.css';

function Hero() {
    return (
        <main>
            <section className="hero">
                <h1>Bienvenido al Gym Pesas</h1>
                <p>Explora nuestros cursos, reserva máquinas, y mantente en forma con nosotros.</p>
            </section>
            <section className="info">
                <div>
                    <h2>Información del Gimnasio Pesas</h2>
                    <p>Dirección: Calle Fuerte</p>
                    <p>Horario: Lunes a Viernes - 8:00 AM a 10:00 PM</p>
                    <p>Teléfono: 123-456-789</p>
                </div>
                <img src="gym-info.png" alt="imagen de informacion" />
            </section>
        </main>
    )
}

export default Hero;