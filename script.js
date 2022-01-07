const xhr = new XMLHttpRequest()
const data = null
const btn = document.querySelector('#serach-btn')
btn.addEventListener('click', () => {
    const serach = document.querySelector('#search').value
    
    let url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=`

    url = `${url}${serach}`

    // AJAX Request
    xhr.open('GET', url)

    // Set the request headers
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)

            console.log(response)

            let output = ''

            for(let i=0; i < response.results.length; i++) {
                const image=`<img src="http://image.tmdb.org/t/p/w500/${response.results[i].poster_path}"style="height:300px;
                width:280px"/>`
                if(response.results[i].title!= undefined){
                 output += `${image}<br/><br/><b><u>${response.results[i].title} </u> <br /> <i> 
                    (Release : ${response.results[i].release_date}) </i> <br /> <br /> 
                    (Ratings : ${response.results[i].vote_average}) </i> <br /> <br /> 
                      ${response.results[i].overview} <br /> <br /> <hr />`
                }  
            }             
                    const container = document.querySelector('#movie-details')

                    container.innerHTML = output
        }
    }

    xhr.send(data)
})






