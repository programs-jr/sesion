window.addEventListener("load", ()=> {
    const mov = window.matchMedia("(max-width: 600px)");
    const tab = window.matchMedia("(min-width: 601px) and (max-width: 960px)");
    const lap = window.matchMedia("(min-width: 961px) and (max-width: 1800px)");
    const coni = document.querySelector(".infop");
    const barra = document.querySelector(".barra");
    const perfil1 = document.querySelector(".perfil1");
    const perfil2 = document.querySelector(".perfil2");
    const term = document.querySelector(".term");
    const activo = true;

    // movil y tablet

    let initial = 0;
    let end = 0;
    let swipe = 0; 

    document.addEventListener("touchstart", (e)=> {
        initial = e.touches[0].clientX;
    });
    
    document.addEventListener("touchend", (e)=> {
        end = e.changedTouches[0].clientX;
        swipe = initial - end;
    });
    

    const cambios = ()=> {
        if (mov.matches) {
            setTimeout(()=> {
                perfil1.innerHTML = "<img src='http://imgfz.com/i/6EXrey0.jpg' class='ft'> <p class='name'>La niña cerebrito</p>";
                perfil2.innerHTML = "<img src='http://imgfz.com/i/JIjEam1.jpg' class='ft2'><p class='name2'>Ivanna Valentina</p>";
            }, 14000);

        let ftElegida;
        let progreso = 0;

        perfil1.addEventListener("click", ()=>{
            const intervalo = setInterval(()=> {
                progreso += 5;
                barra.style.background = `linear-gradient(to right, blue ${progreso}%, transparent ${progreso}%)`;
            
                if (progreso == 100) {
                    clearInterval(intervalo);
                    setTimeout(()=> {
                        barra.style.background = "transparent";
                        coni.innerHTML = " ";
                    }, 500);
                    coni.style.animation = "transformar 5s ease forwards";
                    setTimeout(()=> {
                        coni.innerHTML = "<h2 style='grid-column: 1/4; animation: levi1 5s ease forwards;'>Iniciar Sesion</h2> <p class='des' style='grid-row: 2/6; animation: levi1 5s ease forwards;'>Si presiona el boton 'Aceptar', Dara acceso a su <b>Corazon</b>, <b>Amor</b> y <b>Sonrisa</b>, permitiendo asi tener un lindo momentito. Ademas, de continuar con su experiencia en esta pagina, sin mas, tome sus deciciones.<br><br> Para conocer los terminos y condiciones presiona <b>Mas informacion</b>.</p> <img src='http://imgfz.com/i/IdaGlUw.jpg' class='mosaico'> <button class='mas'>Mas informacion</button> <button class='aceptar'>Aceptar</button>";
                        let mas = document.querySelector('.mas');
                        let acept = document.querySelector(".aceptar");
                        
                        acept.addEventListener("click", ()=> {
                            window.close();
                        });
                        mas.addEventListener("click", ()=> {
                            term.style.animation = "ter 5s ease forwards";
                            setTimeout(()=> {
                                document.addEventListener("click", ()=> {
                                    term.style.animation = "con 5s ease forwards";
                                })
                            },3000);
                        });
                    }, 7000);
                }
            }, 100);
        });

        perfil2.addEventListener("click", ()=>{
            const intervalo = setInterval(()=> {
                progreso += 5;
                barra.style.background = `linear-gradient(to right, blue ${progreso}%, transparent ${progreso}%)`;
            
                if (progreso == 100) {
                    clearInterval(intervalo);
                    setTimeout(()=> {
                        barra.style.background = "transparent";
                        coni.innerHTML = " ";
                    }, 500);
                    coni.style.animation = "transformar 5s ease forwards";
                    setTimeout(()=> {
                        coni.innerHTML = "<h2 style='grid-column: 1/4; animation: levi1 5s ease forwards;'>Iniciar Sesion</h2> <p class='des' style='grid-row: 2/6; animation: levi1 5s ease forwards;'>Si presiona el boton 'Aceptar', Dara acceso a su <b>Corazon</b>, <b>Amor</b> y <b>Sonrisa</b>, permitiendo asi tener un lindo momentito. Ademas, de continuar con su experiencia en esta pagina, sin mas, tome sus deciciones.<br><br> Para conocer los terminos y condiciones presiona <b>Mas informacion</b>.</p> <img src='http://imgfz.com/i/IdaGlUw.jpg' class='mosaico'> <button class='mas'>Mas informacion</button> <button class='aceptar'>Aceptar</button>";
                        let mas = document.querySelector('.mas');
                        let acept = document.querySelector(".aceptar");
                        
                        acept.addEventListener("click", ()=> {
                            window.close();
                        });
                        mas.addEventListener("click", ()=> {
                            term.style.animation = "ter 5s ease forwards";
                            setTimeout(()=> {
                                document.addEventListener("click", ()=> {
                                    term.style.animation = "con 5s ease forwards";
                                })
                            },3000);
                        });
                    }, 7000);
                }
            }, 100);

            ftElegida = "http://imgfz.com/i/YXxrEG7.jpg";
        });
        }
        else if (tab.matches) {
            setTimeout(()=> {
                perfil1.innerHTML = "<img src='http://imgfz.com/i/6EXrey0.jpg' class='ft'> <p class='name'>La niña cerebrito</p>";
                perfil2.innerHTML = "<img src='http://imgfz.com/i/JIjEam1.jpg' class='ft2'><p class='name2'>Ivanna Valentina</p>";
            }, 14000);
    
            let ftElegida = "";
            let progreso = 0;
    
            perfil1.addEventListener("click", ()=>{
                const intervalo = setInterval(()=> {
                    progreso += 5;
                    barra.style.background = `linear-gradient(to right, blue ${progreso}%, transparent ${progreso}%)`;
                
                    if (progreso == 100) {
                        clearInterval(intervalo);
                        setTimeout(()=> {
                            barra.style.background = "transparent";
                            coni.innerHTML = " ";
                        }, 1000);
                        coni.style.animation = "transformar 5s ease forwards";
                        setTimeout(()=> {
                            coni.innerHTML = "<h2 style='grid-column: 1/4; animation: levi1 5s ease forwards;'>Iniciar Sesion</h2> <p class='des' style='grid-row: 2/6; grid-column: 1/5; width: 90%; animation: levi1 5s ease forwards;'>Si presiona el boton 'Aceptar', Dara acceso a su <b>Corazon</b>, <b>Amor</b> y <b>Sonrisa</b>, permitiendo asi tener un lindo momentito. Ademas, de continuar con su experiencia en esta pagina, sin mas, tome sus deciciones.<br><br> Para conocer los terminos y condiciones presiona <b>Mas informacion</b>.</p> <img src='http://imgfz.com/i/IdaGlUw.jpg' class='mosaico'> <button class='mas'>Mas informacion</button> <button class='aceptar'>Aceptar</button>";
                            let mas = document.querySelector('.mas');
                            let acept = document.querySelector(".aceptar");
                            
                            acept.addEventListener("click", ()=> {
                                window.close();
                            });
                            mas.addEventListener("click", ()=> {
                                term.style.animation = "ter 5s ease forwards";
                                setTimeout(()=> {
                                    document.addEventListener("click", ()=> {
                                        term.style.animation = "con 5s ease forwards";
                                    })
                                },3000);
                            });
                
                            ftElegida = "http://imgfz.com/i/fqPVMxU.jpg";
                        }, 7000);
                    }
                }, 100);
            });
    
            perfil2.addEventListener("click", ()=>{
                const intervalo = setInterval(()=> {
                    progreso += 5;
                    barra.style.background = `linear-gradient(to right, blue ${progreso}%, transparent ${progreso}%)`;
                
                    if (progreso == 100) {
                        clearInterval(intervalo);
                        setTimeout(()=> {
                            barra.style.background = "transparent";
                            coni.innerHTML = " ";
                        }, 1000);
                        coni.style.animation = "transformar 5s ease forwards";
                        setTimeout(()=> {
                            coni.innerHTML = "<h2 style='grid-column: 1/4; animation: levi1 5s ease forwards;'>Iniciar Sesion</h2> <p class='des' style='grid-row: 2/6; grid-column: 1/5; width: 90%; animation: levi1 5s ease forwards;'>Si presiona el boton 'Aceptar', Dara acceso a su <b>Corazon</b>, <b>Amor</b> y <b>Sonrisa</b>, permitiendo asi tener un lindo momentito. Ademas, de continuar con su experiencia en esta pagina, sin mas, tome sus deciciones.<br><br> Para conocer los terminos y condiciones presiona <b>Mas informacion</b>.</p> <img src='http://imgfz.com/i/IdaGlUw.jpg' class='mosaico'> <button class='mas'>Mas informacion</button> <button class='aceptar'>Aceptar</button>";
                            let mas = document.querySelector('.mas');
                            let acept = document.querySelector(".aceptar");
                
                            ftElegida = "http://imgfz.com/i/fqPVMxU.jpg";
                            
                            acept.addEventListener("click", ()=> {
                                window.close();
                            });
                            
                            if (swipe > 50 && activo == true) {
                                term.style.animation = "con 5s ease forwards";
                                activo = false;
                            }
                        }, 7000);
                    }
                }, 100);
    
                ftElegida = "http://imgfz.com/i/YXxrEG7.jpg";
            });
        }
        else if (lap.matches) {
            setTimeout(()=> {
                perfil1.innerHTML = "<img src='http://imgfz.com/i/6EXrey0.jpg' class='ft'> <p class='name'>La niña cerebrito</p>";
                perfil2.innerHTML = "<img src='http://imgfz.com/i/JIjEam1.jpg' class='ft2'><p class='name2'>Ivanna Valentina</p>";
            }, 14000);

            let ftElegida;
            let progreso = 0;

            perfil1.addEventListener("click", ()=> {
                const intervalo = setInterval(()=> {
                    progreso += 5;
                    barra.style.background = `linear-gradient(to right, blue ${progreso}%, transparent ${progreso}%)`;
                
                    if (progreso == 100) {
                        clearInterval(intervalo);
                        setTimeout(()=> {
                            barra.style.background = "transparent";
                            coni.innerHTML = " ";
                        }, 1000);
                        coni.style.animation = "transformar 5s ease forwards";
                        setTimeout(()=> {
                            coni.innerHTML = "<h2 style='grid-column: 1/4; animation: levi1 5s ease forwards;'>Iniciar Sesion</h2> <p class='des' style='grid-row: 2/6; animation: levi1 5s ease forwards;'>Si presiona el boton 'Aceptar', Dara acceso a su <b>Corazon</b>, <b>Amor</b> y <b>Sonrisa</b>, permitiendo asi tener un lindo momentito. Ademas, de continuar con su experiencia en esta pagina, sin mas, tome sus deciciones.<br><br> Para conocer los terminos y condiciones presiona <b>Mas informacion</b>.</p> <img src='http://imgfz.com/i/WRYhaQG.jpg' class='mosaico'> <button class='mas'>Mas informacion</button> <button class='aceptar'>Aceptar</button>";
                            let acept = document.querySelector(".aceptar");
                            let mas = document.querySelector(".mas");
                            mas.addEventListener("click", ()=> {
                                term.style.animation = "ter 5s ease forwards";
                                document.addEventListener("keydown", (e)=> {
                                    if (e.key == "ArrowRight") {
                                        term.style.animation = "con 5s ease forwards";
                                    }
                                })
                            });
                            acept.addEventListener("click", ()=> {
                                window.close();
                            });
                        }, 7000);
                    }
                }, 100);

                ftElegida = "http://imgfz.com/i/fqPVMxU.jpg";
            });

            perfil2.addEventListener("click", ()=> {
                const intervalo = setInterval(()=> {
                    progreso += 5;
                    barra.style.background = `linear-gradient(to right, blue ${progreso}%, transparent ${progreso}%)`;
                
                    if (progreso == 100) {
                        clearInterval(intervalo);
                        setTimeout(()=> {
                            barra.style.background = "transparent";
                            coni.innerHTML = " ";
                        }, 1000);
                        coni.style.animation = "transformar 5s ease forwards";
                        setTimeout(()=> {
                            coni.innerHTML = "<h2 style='grid-column: 1/4; animation: levi1 5s ease forwards;'>Iniciar Sesion</h2> <p class='des' style='grid-row: 2/6; animation: levi1 5s ease forwards;'>Si presiona el boton 'Aceptar', Dara acceso a su <b>Corazon</b>, <b>Amor</b> y <b>Sonrisa</b>, permitiendo asi tener un lindo momentito. Ademas, de continuar con su experiencia en esta pagina, sin mas, tome sus deciciones.<br><br> Para conocer los terminos y condiciones presiona <b>Mas informacion</b>.</p> <img src='http://imgfz.com/i/WRYhaQG.jpg' class='mosaico'> <button class='mas'>Mas informacion</button> <button class='aceptar'>Aceptar</button>";
                            let acept = document.querySelector(".aceptar");
                            let mas = document.querySelector(".mas");
                            mas.addEventListener("click", ()=> {
                                term.style.animation = "ter 5s ease forwards";
                                document.addEventListener("keydown", (e)=> {
                                    if (e.key == "ArrowRight") {
                                        term.style.animation = "con 5s ease forwards";
                                    }
                                });
                            });
                            acept.addEventListener("click", ()=> {
                                window.close();
                            });
                        }, 7000);
                    }
                }, 100);

                ftElegida = "http://imgfz.com/i/YXxrEG7.jpg";
            });
        }
    }

    mov.addEventListener("change", cambios);
    tab.addEventListener("change", cambios);
    lap.addEventListener("change", cambios);

    cambios();
});