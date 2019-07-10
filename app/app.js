let App = function () {
    const url = 'http://localhost:8080'
    const result = document.getElementById("result")
    const el = document.getElementById("btn-detect")

    let detect = function () {
        el.disabled = true
        result.innerText = 'Loading...'
        axios.get(url)
            .then(function (response) {
                result.innerHTML = format(response.data)
            })
            .catch(function (error) {
                result.innerHTML = format(error)
            })
            .finally(function () {
                el.disabled = false
            })
    }

    let format = function (obj) {
        return '<pre>' +
            JSON.stringify(obj, null, 2) +
            '</pre>'
    }

    return {
        init: function () {
            el.addEventListener("click", function () {
                detect()
            })
        }
    }
}()

App.init()