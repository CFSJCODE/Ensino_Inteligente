document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const data = document.getElementById('data').value;
  const horario = document.getElementById('horario').value;

  const startDateTime = new Date(`${data}T${horario}:00`);
  const endDateTime = new Date(startDateTime.getTime() + 45 * 60 * 1000); // 45 minutos depois

  console.log('Data e horário selecionados:');
  console.log('Início:', startDateTime);
  console.log('Fim:', endDateTime);

  // Aqui você pode adicionar o código para agendar a aula, como fazer chamadas de API para o Google Agenda, por exemplo.
});
