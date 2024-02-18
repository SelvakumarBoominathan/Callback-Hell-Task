function startCountdown() {

  setTimeout(() => {
    document.body.innerText = '10';
    setTimeout(() => {
      document.body.innerText = '9';
      setTimeout(() => {
        document.body.innerText = '8';
        setTimeout(() => {
          document.body.innerText = '7';
          setTimeout(() => {
            document.body.innerText = '6';
            setTimeout(() => {
              document.body.innerText = '5';
              setTimeout(() => {
                document.body.innerText = '4';
                setTimeout(() => {
                  document.body.innerText = '3';
                  setTimeout(() => {
                    document.body.innerText = '2';
                    setTimeout(() => {
                      document.body.innerText = '1';
                      setTimeout(() => {
                        document.body.innerText = 'HAPPY INDEPENDENCE DAY!';
                        document.body.style.backgroundImage = "url('flag.gif')";
                      }, 1000)
                    }, 1000)
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}

startCountdown();


