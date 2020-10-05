const apiKey = 'AeWSbEwd8j0fLcCvVM3oKtJYs6vao6oK'

export default function getGifts({keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`  
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image            
            const { url } = images.downsized_medium
            return { title, id, url }            
        })
        return gifs
      }
    });
}
