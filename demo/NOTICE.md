# 세미랑 회로도 데모: 출처와 라이선스 고지

이 폴더(`demo/`)는 세미랑 회로도 도구의 결과 뷰어와 두 판 비교 화면을 예제 결과와 함께 묶은 정적 데모입니다. 화면은 브라우저 안에서만 돌고 네트워크를 쓰지 않습니다. 사용자가 여는 파일은 어디로도 보내지 않습니다.

이 글은 법률 자문이 아닙니다.

## 예제: mega-power

- 원본: Arduino MEGA 2560 Rev3 공식 회로도(Eagle, `MEGA2560_Rev3e.sch`, 압축 파일 `A000067-cad-files.zip`).
- 받은 곳: https://github.com/arduino/docs-content (커밋 `3c68978c438b31198e3e33b21477f4513c1e09f4`, `content/hardware/mega/boards/mega-2560/downloads`).
- 원본 SHA-256: `1ff439fc6e1053903fdbaa46b061c150e043d84810e7629091519f918ded83bd`.
- 라이선스: 크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0(CC BY-SA 4.0), https://creativecommons.org/licenses/by-sa/4.0/
- 바꾼 점: 전원 부분(부품 16개)만 골라 세미랑 도구가 KiCad 10 회로도로 다시 그렸고, 그 그림(SVG)과 점검 결과(result.json)를 실었습니다. 이 예제 데이터도 같은 라이선스(CC BY-SA 4.0)를 따릅니다.

## 예제: 커밋 기록 (mega-power-history)

- 위 mega-power와 같은 원본(Arduino MEGA 2560 Rev3, CC BY-SA 4.0)에서 세미랑 도구가 다시 그린 전원 부분 회로도로 시작합니다.
- 바꾼 점: 커밋 기록 화면을 보여 주려고 세미랑 팀이 예제용 커밋 6개를 더 쌓았습니다(저항과 커패시터 값 바꿈, 설명 글만 고침, C13 지움, C14 더함, IC7 전원을 VIN으로 바꿨다 되돌림). 실제 설계 이력이 아닙니다. 커밋마다의 회로도, 그림(SVG), 점검 결과도 같은 라이선스(CC BY-SA 4.0)를 따릅니다.
- 만든 방법: 세미랑 저장소의 `scripts/history-example.ts`와 `history` 명령(KiCad 10.0.7, Docker).

## 회로도 기호(심볼)

- KiCad 표준 심볼 라이브러리(kicad/kicad:10.0.7 이미지), https://gitlab.com/kicad/libraries/kicad-symbols
- 라이선스: KiCad Libraries License(CC BY-SA 4.0에 설계물 예외를 더한 것). 원문: https://gitlab.com/kicad/libraries/kicad-symbols/-/raw/10.0.7/LICENSE.md

## 화면 코드

- 결과 뷰어, 비교 화면, 커밋 기록 화면은 세미랑 팀이 만든 코드를 빌드한 것입니다. 화면 코드의 공개 라이선스는 아직 정하지 않았습니다.
- 빌드 안에 들어 있는 제3자 코드: react, react-dom 19.3.1과 scheduler. 라이선스는 MIT입니다.

```
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
