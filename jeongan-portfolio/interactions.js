'use strict';
// Illustrations explain the portfolio. They do not invoke RoomFit or InTally services.
document.querySelectorAll('[data-flow]').forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.flow;
    document.querySelectorAll('[data-flow]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-flow-panel]').forEach(panel => { panel.hidden = panel.dataset.flowPanel !== selected; });
  });
});
const moneyStudy = document.querySelector('.money-study');
if (moneyStudy) {
  let received = 60000;
  const confirmed = document.getElementById('relation');
  const amount = document.getElementById('burden');
  const equation = document.getElementById('equation');
  const format = value => value.toLocaleString('ko-KR');
  const update = () => {
    const applied = confirmed.checked ? received : 0;
    amount.innerHTML = format(80000 - applied) + '<small>원</small>';
    equation.textContent = received === 0
      ? '아직 받은 정산이 없어, 예정 금액은 차감하지 않습니다.'
      : confirmed.checked
        ? '80,000원 − 관계가 확인된 정산 ' + format(applied) + '원'
        : '받은 ' + format(received) + '원의 관계를 확인하기 전에는 차감하지 않습니다.';
  };
  document.querySelectorAll('[data-received]').forEach(button => button.addEventListener('click', () => {
    received = Number(button.dataset.received);
    document.querySelectorAll('[data-received]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    update();
  }));
  confirmed.addEventListener('change', update);
}
