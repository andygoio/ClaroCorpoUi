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


            InvalidInputHelper(document.getElementById("linea-restriction-service"), {
            defaultText: "Ingrese su número de línea",
            emptyText: "Ingrese su número de línea",
            invalidText: function (input) {
                return 'El número de línea "' + input.value + '" es invalido!';
            }
        });
