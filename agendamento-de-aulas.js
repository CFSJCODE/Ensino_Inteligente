document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var data = document.getElementById('data').value;
    var horario = document.getElementById('horario').value;
  
    var startDateTime = new Date(`${data}T${horario}:00`);
    var endDateTime = new Date(startDateTime.getTime() + 45 * 60 * 1000); // 45 minutos depois
  
    console.log('Data e horário selecionados:');
    console.log('Início:', startDateTime);
    console.log('Fim:', endDateTime);
  
    // Aqui você pode adicionar o código para agendar a aula, como fazer chamadas de API para o Google Agenda, por exemplo.
  });
  