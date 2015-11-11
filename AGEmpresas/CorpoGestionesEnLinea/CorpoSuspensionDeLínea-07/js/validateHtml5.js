/**
  * @author ComFreek
  * @license MIT (c) 2013-2015 ComFreek <http://stackoverflow.com/users/603003/comfreek>
  * Please retain this author and license notice!
  */
        (function (exports) {
            function valOrFunction(val, ctx, args) {
                if (typeof val == "function") {
                    return val.apply(ctx, args);
                } else {
                    return val;
                }
            }

            function InvalidInputHelper(input, options) {
                input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

                function changeOrInput() {
                    if (input.value == "") {
                        input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
                    } else {
                        input.setCustomValidity("");
                    }
                }

                function invalid() {
                    if (input.value == "") {
                        input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
                    } else {
                       console.log("INVALID!"); input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
                    }
                }

                input.addEventListener("change", changeOrInput);
                input.addEventListener("input", changeOrInput);
                input.addEventListener("invalid", invalid);
            }
            exports.InvalidInputHelper = InvalidInputHelper;
        })(window);



        InvalidInputHelper(document.getElementById("name"), {
            defaultText: "Ingrese su nombre",
            emptyText: "Ingrese su nombre",
            invalidText: function (input) {
                return 'El nombre "' + input.value + '" es invalido';
            }
        });

        InvalidInputHelper(document.getElementById("surname"), {
            defaultText: "Ingrese su apellido",
            emptyText: "Ingrese su apellido",
            invalidText: function (input) {
                return 'El apellido "' + input.value + '" es invalido';
            }
        });

         InvalidInputHelper(document.getElementById("auDNI"), {
            defaultText: "Ingrese su número de documento",
            emptyText: "Ingrese su número de documento",
            invalidText: function (input) {
                return 'El DNI "' + input.value + '" es invalido';
            }
        });

          InvalidInputHelper(document.getElementById("email"), {
            defaultText: "Ingrese su correo electrónico",
            emptyText: "Ingrese su correo electrónico",
            invalidText: function (input) {
                return 'El email "' + input.value + '" es invalido';
            }
        });

          InvalidInputHelper(document.getElementById("linea1"), {
            defaultText: "Ingrese su número de línea",
            emptyText: "Ingrese su número de línea",
            invalidText: function (input) {
                return 'El número de línea "' + input.value + '" es invalido';
            }
        });

          InvalidInputHelper(document.getElementById("nombre1"), {
            defaultText: "Ingrese su nombre",
            emptyText: "Ingrese su nombre",
            invalidText: function (input) {
                return 'El nombre "' + input.value + '" es invalido';
            }
        });

           InvalidInputHelper(document.getElementById("apellido1"), {
            defaultText: "Ingrese su apellido",
            emptyText: "Ingrese su apellido",
            invalidText: function (input) {
                return 'El apellido "' + input.value + '" es invalido';
            }
        });

           InvalidInputHelper(document.getElementById("dni1"), {
            defaultText: "Ingrese su número de documento",
            emptyText: "Ingrese su número de documento",
            invalidText: function (input) {
                return 'El DNI "' + input.value + '" es invalido';
            }
        });

            InvalidInputHelper(document.getElementById("email1"), {
            defaultText: "Ingrese su correo electrónico",
            emptyText: "Ingrese su correo electrónico",
            invalidText: function (input) {
                return 'El email "' + input.value + '" es invalido';
            }
        });