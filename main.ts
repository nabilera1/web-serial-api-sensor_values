// 웹 시리얼 통신 속도 설정 (115200 BaudRate)
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)

// 줄바꿈(\n) 단위로 데이터가 수신되면 실행
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let cmd = serial.readString().trim()

    // 수신된 명령어에 따라 표정 표시
    if (cmd == "HAPPY") {
        basic.showIcon(IconNames.Happy)
    } else if (cmd == "SAD") {
        basic.showIcon(IconNames.Sad)
    } else if (cmd == "ANGRY") {
        basic.showIcon(IconNames.Angry)
    } else if (cmd == "SURPRISED") {
        basic.showIcon(IconNames.Surprised)
    } else if (cmd == "SILLY") {
        basic.showIcon(IconNames.Silly)
    }
})

// 프로그램 시작 시 체크 표시
basic.showIcon(IconNames.Yes)