// Particles js
particlesJS({
    "particles": {
        "number": {
            "value": 1000,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// MEUS TEMPLATES

// Componentes
Vue.component('menuLateral', {
    data: function () {
        return {
            linksMenuLateral: {
                loja: '#',
                suporte: 'suporte.html',
                galeria: '#',
                fazerDoacao: 'https://server.pro/server/15745071'
            }
        }
    },
    template: `
    <div>
        <center>
                        <div>
                            <a class="float-center" href="https://minecraftpocket-servers.com/server/103480/"
                                target="_blank"><img
                                    src="https://minecraftpocket-servers.com/server/103480/banners/half-banner-3.png"
                                    border="0"></a>
                        </div>
                        <!-- Discord -->
                        <div class="mt-3 d-none d-lg-block d-xl-none">
                            <iframe src="https://discord.com/widget?id=765817125263900673&theme=dark" width="235"
                                height="200" allowtransparency="true" frameborder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        </div>
                        <div class="mt-3">
                            <a style="width: 100%;" class="btn btn-primary doacao"
                                v-bind:href="linksMenuLateral.fazerDoacao" target="_blank" role="button">Fazer
                                doação <span class="material-icons float-right">
                                    favorite
                                </span></a>
                        </div>
                    </center>

                    <div class="dropdown mt-3">
                        <button style="width: 100%;" class="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mais
                        </button>
                        <div style="width: 100%;" class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <a v-bind:href="linksMenuLateral.loja" class="dropdown-item" type="button">Loja <span
                                    class="material-icons float-right">
                                    shopping_cart
                                </span></a>
                            <div class="dropdown-divider"></div>
                            <a v-bind:href="linksMenuLateral.suporte" class="dropdown-item" type="button">Suporte <span
                                    class="material-icons float-right">
                                    record_voice_over
                                </span></a>
                            <div class="dropdown-divider"></div>
                            <a v-bind:href="linksMenuLateral.galeria" class="dropdown-item" type="button">Galeria <span
                                    class="material-icons float-right">
                                    backup_table
                                </span></a>
                        </div>
                    </div>
    <div/>
    `
})

// INCLUSÃO VUE JS

var app = new Vue({
    el: '#app',
    data: {
        // Variáveis

        // Dados servidor
        servidor: {
            enderecoServidor: 'worldbros.serv.gs',
            portaServidor: 40670
        },

        contatos: {
            emailServidor: 'world.bros@gmail.com',
            emailDesenvolvedor: 'nogueirarenzoso@gmail.com',
            enderecoDiscord: 'discord.gg/kTmJGC'
        },
        regrasServidor: [
            'Não use progamas de terceiros para ter vantagens no jogo, isso não é legal.',
            'Evite usar palavrões no chat global, é feio.'
        ],
    }
})