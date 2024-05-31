document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('mail');
    var inputElement = document.getElementById('import');

    // select 요소에 change 이벤트 리스너 추가
    selectElement.addEventListener('change', function() {
        if (selectElement.value === 'custom') {
            inputElement.style.display = 'inline'; // 입력 필드 표시
            inputElement.value = ''; // 입력 필드 초기화
            inputElement.focus(); // 입력 필드에 포커스
        } else {
            inputElement.value = selectElement.value; // 선택된 값을 입력 필드에 설정
        }
    });
    // 초기화: 페이지 로드 시 기본 설정
    if (selectElement.value === 'custom') {
        inputElement.style.display = 'inline';
        inputElement.focus();
    } else {
        inputElement.style.display = 'none';
        inputElement.value = selectElement.value;
    }
});