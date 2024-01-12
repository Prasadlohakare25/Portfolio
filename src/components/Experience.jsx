import React from 'react'

function Experience() {

    const exp = [
        {
            id: 1,
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX////kTSbxZSnr6+sAAADkSR/pdFnrWSj39/fNzc3r8PDkRBXxXxvr7e7wXRbxYiPopZf4uaT2qIzkPwXzflPp0Mm0tLQdHR3Y2NhTU1Pnk4LwWADlaE396eC6urqDg4MpKSlgYGDjQQx6enrsXCgVFRXj4+P+9/X98OznjXr1wrfqfmn2yb/otKriNwDlVjLq3NlYWFhGRkaoqKjys6X41MznXz354Nvop5r0h13pxsDwpJXqUxnlZEbq2tXzd0TrhnP1kWz0g1jybjn6yLf1m3w3Nzeampp/f3/mj3/lc1zsdVL5vqv3rpPobVT708YLfnssAAAL10lEQVR4nO2dfVvaShPGgxBfiIAarR6R09O0lVfF0/JipVises7RR/H7f5snIQYSmBkyZDZGLu6/LFfc5Nddd+/MzC6axtOHjKdv3kebf40/OwpcMavPzuWH43/+s+lr+fPkMqcZ7Y/xP/9kPmM0iRJmPk4a3vJdtkSEmdNxw/8sKeG4kX/9ly0TYeaD20Y6cNlSEX51J5u/l5fQnWz+DF62XITO7wAfJYHwDyFC+3/q49RlCSH8pm26SgcJvzMJMx9Opy9LCGHmq6epR3sF96H+5322CRF+/Xvqg8QQAjryXzoh/Oj/eIYQaWZFqEorQp9WhJmvfredOTwMNrMMhIf+N6bM1hISZrT/Jr/6SZtqZjkIfT/nlpNw8mZvv0UljvAwferqKOjaxgpDqH1yf3JMLkr47ZNf/8ZG+Nf4kaMQbro/pSnCoD7FRngoQui+Gn7XlpjQGafui9jSEqa9X1taQu3769yxvISeVoQrQiH5PM34kSdhDITws//jzdkWXE0+33L++e2NCNNbY40/m3y0CV96GmgCaAFq5mgL1pG20korrbTSSiuttNJKK71DVfrrSVa/EpmwfK4nWefl6J1oppIsMzqg9tYMcyRA2NffGoKQ3hcgrCeasC5A+GC8NQYh40GAsJdowp4AYSvRhC0Bwpr11hiErJoAYTvJC6LZFiDsJpqwJEBYSTRhdFtqG1Phh9qIqkBrArZUK3dEl/yNtYj64mtM70gQasNkEfr7UB9KAArbNllCCdOmadUEE1ZFCI9FTU1kQn9jxrEI4WWCCSVMm7RtEyUUMW3Stk2UUMS02bYtwX3YFSEsJWou9S/4KV3CltrGVBJQljAlYUulbZskoZBpE462RSUMLPgSkTZH64klXBciHCSWcCBEKGrbohL62xIybcK2TZTwUohQ1LZJEgqZNk1r4IS6wdXPPFcFnLAhRNhGCfXB5Q5TrV2mnn4UUEIZW2rbNpTQuMxyxb/9/TZKKGPabFODEx5n00xtzr/flAJ9GDBtlpCl0TR0LtXrMRDuo4SGFCCeBtbX1ROWb/2EgWhpU4wQNaZ6Xz1hJTCVKrGlVDyxwwXkE5YKKKFMLNERbtuaFznVhN08NpWKmTbKtunXygnbRZRQyrRp2hm+XBwoJ7xD+9A6EyPEbZt5pZxwFyeUMm1UPNE6406mbMI91NIIxRIdlVBCY0c5IW7aRBLArsrnKCHbtrEJb1BLI1G15wmfSwfKCXHTpssBamg8kW9MuYS4adM7goRoGlg/YQLyCXFLI5MAdoVH29i2jUtYKaKEA0FCItp2oZiwi1saOdNGVe9ZkDGVfMd/wW2pRNWeJ7x6zwRsW671cIxqj6kbNEojlAB2hccTLcC2ZR9MIta2zVMMkTZHPNuWpUpSo8VLA8NHzrRR1XvGJUBIlaQKEsqZNnvKRh/Z6M0S5qggeSTCYBxKJj36StjEHlivAoQHRG2DHGFT0JYSaWD9ESC8iINQ70sSErYNiLblLoiEYyRCZaaNrN4DrPcFOqglCeUibY5wY2pCYQwi8x+J0N+QUNWeJ9yYmoAxzT3GQChq2ri2LUsMajlCSdPGtm1VfMkXIxQ1bZK2TYxQ1LTZtg03NUzbJjdKZar2POHVe1C0LXeF27YohCqq9jzh1XtQtC0WQqGqvbFwYwokSXMHaubSoC2VBSTiiR3ItqGAkQiVxRId4dV7TcC2nTbR7eUbBZZwQqmqPU9E9d7pLGHu8QTT//Y5+oUTDoQJcdvGTJLyoontOBLArvAVjpkk5RESsURZ08a1bWKET3h6VKpqz1NDKknKI3yOIz3qihdtEyMk0qOypo3aK8tMkvII8Yj3ubCl0TQ0DcxMkvIIf+MJYGlA/BAXKNomRvgLJZQ4tiUo3JgO1RHGUrXn6QQ3phxAHmElngSwKzz00mQlSVmEpTxKOBAnlLJtLMKYEsCu8Oo9Sx0hYdrkqvY8tYRq21iEMZo2qnqPZ9tYhIRpk40lOsLjiTzbxiIkqvakTZs9cQvVtrEIcVsqb9qoTRdAklSIMI6tFhNCDNCpbcuFF4sQN20ix7ZMCY+2nRww1C0hAm5Z9o9RVRsRJsKjbbrJUBFRHiLEa9oeFRAK7ZVF4qWFfeCWMVXteRLaK4sR/gBuGatpEzt7DyHcvgduGVPVnifctokQ7gG3JEybdCzREbFXVoAwvwvcMpatFhMJnUyHEd4Bt4zVtIkd4oIRvgC3xCNtQse2BFUhVgsoycQjLEKPjG9EkE6PuoR4oVMTOIYai+tgfQh5mjWUULRqz1MZ30l6MmtMs9fI4oJlSKFOwRd8FaaNOnsPSJKiaWCYsHALdQpOKB9pc4RH20xG9R5CyDRtslV7nojqPehFEBnUCCHPtAlX7XnCbZsJRNuyyKCGCbdvgBvGbNqoNLDFqN5DCCHTRuyPVWHayGgbWL3HIcw/AzeM2bRRR5yA1XvI2xZCyDNtYoeaBEVU7wF7ZbNIkBwh5Jk24ao9T8Smi4fwmy4QQuiR8fSo6FaLicp4oAbYSYpV7yEzDWTa8EibrsK0adQRJ0CSNHfAGaUFqFPw9KjEt1pA4lXvXXPm0jXgdsShJtJVe56I6r0ZwHT6FL4UJCzcArcjDjWRrtrzRMQTgZ2k2RR4OUwI2dJunAlgV7htg9LA2XXdMmYhZwkL2/k8FGkjDjVRY9qoaBtYvZe9qFX7hjUFuTFDt7/3Ak7+sZs2fvWe/R6cvj4bNE1/V/oIC/ni7f0dWpBOmDb5BLCrRar3ctls+uBy3RwP2A2v84rFH09kuX0sh5oERVTvkUecOJRXvX5qRLkxGppr+89znzLGqj1PUdLANqXzZ2lZP/PFX8gf3pSIQ03UmDYtavWe+2dZpYemT3gsUb5qzxNuTMNW7+VyoW9WJmypMkIiDRwOMM3I47+BaSNsm94BtiREJcQtjSrTRts2ccISHmkbKCPEbZsR+uy90IQv8Zs2Tdth7ZWNSIibNgVVe56eBDZdhCZ8A9Mms+kiNGGsVXueSNuWC9eLoQnfwLSRX1DWebi6yGZDQIYjrNzd3/oBg2X6ykwbmQY2rNRw5yA7lzIEYfd5fy0f6MEpS6OOsEycd5EaHV+eGpxd5EjIOYSVu5vC9CHl04RKEsCvmv9NF7pl9nsHxIAlCMsve7+Ks3QzlkZNAtgVcd6FvyvNZv3sGoHECLu7N2vFbRBvmlBF1Z6n0NV7uqV3qldpgBIiLL/c3wJDEyMcKCTkVO/phmUOLw+mKWcIu8/20EQ7D1gslFTteeJW79kDtlM9C/xVBghLT/bQJDsPIlRnSxer3rMH7LA3GbBjQmdeyU8tCqEIlcUSHeG2bU5XGqn6a1e6hKXd34W5QxMhVGjaIlXv2ctI5/jqNDfyK+GGJkaozrRRaeBQkIaZqvd+hx6aEwXToyoJo39Bmf6T13kAoZKqPU9zbFsYLXTyR2ymjYi2qSWMKdLmCN0rGyPhiVLCUMZUMaGaqj1P0b85dxHC4Nuhmqo9T9E3XXAJv2xMNaDUtElsumARzuClRL/VAlL0TRehCSG6EaFK00ZV78kSfsEbUFS15yn6tpL5hFjnvUqpLSXjiTKENN2IUKVp04gjTgQI53SeR6gWEP8uj4iE4egcqUsAu4psTCHC8HjKbaltTE2gkisKIYfOecU8V5cAflW719ctdN8Wk5BYFCA6MzXcUTuTvqpUm6rkWoiQ2XmW2T9uKJ5G/Sp3L9fPzUWmnY1FhqZp1VslpS++MGWj2pwpPQxByMLTdcvo9NTaGFLdVn3xATsfz7A6g1qMQxNWud1bN9ldOV+GaTy2uvEPTViV2sCQ7ErdOk8dN5JC56nbGqagsmc2nWGl6mdvPjRhVRrHJ1akAWuPhGGvnbTOC6rUWnTA2n6lWY1zyYugdq9j8nyPPTStYSsWvyKlSmPQMUJ2pb3k9ZM3r4SRvVim5g1YJ+k/qL2rzgvKXiw75+jcYy8KJ73ELHmLq1KrA8uIPTTteeX903myfY9vwI4Sie9rXgmjSuNhNGBHNUXt97Eo8FWq1ZvVmK30/wENqtoOtghNtAAAAABJRU5ErkJggg==",
            name: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: "data:image/png;base64,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",
            name: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: "https://iconape.com/wp-content/png_logo_vector/javascript-logo.png",
            name: "Javscript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: "https://iconape.com/wp-content/files/zy/371206/svg/371206.svg",
            name: "Java",
            style: "shadow-blue-400"
        },
        {
            id: 5,
            src: "https://iconape.com/wp-content/png_logo_vector/c-programming-language-logo.png",
            name: "C",
            style: "shadow-gray-400"
        },
        {
            id: 6,
            src: "https://iconape.com/wp-content/files/fo/371358/svg/371358.svg",
            name: "Python",
            style: "shadow-yellow-200"
        },
        {
            id: 7,
            src: "https://iconape.com/wp-content/png_logo_vector/elephpant-mascot-php-logo.png",
            name: "php",
            style: "shadow-gray-300"
        }
    ]

    return (
        <div name="Experience" className='w-full h-full bg-gradient-to-b from-gray-800 to-black'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-3xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>
                        These are some techonlogies I have worked with.
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        exp.map((e) => (<div className={`shadow-md hover:scale-105 duration-500 py-2 round-lg ${e.style}`} key={e.id} >
                            <img src={e.src} alt="" className='w-full h-3/4' />
                            <p className='mt-4'>{e.name}</p>
                        </div>))
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience