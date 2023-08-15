// import requests

url = 'https://kauth.kakao.com/oauth/token'
rest_api_key = 'REST API KEY값 입력' # '' <-따옴표 사이에 입력
redirect_uri = 'Redirect_URl 입력' #ex) https://message_kakaotalk.com/oauth
authorize_code = '10번에 복사해둔 빨간색 영역 code=여기 부분 붙여넣기' #code= 제외하고 입력 ex)beuhus38sbefow39hahiwrowuh
data = {
    'grant_type':'authorization_code',
    'client_id':rest_api_key,
    'redirect_uri':redirect_uri,
    'code': authorize_code,
    }

response = requests.post(url, data=data)
tokens = response.json()
print(tokens)

//# json 파일 저장
import json
// #1.
// with open(r"C:\RPA_Common\kakao_code.json","w") as fp:  #경로는 편한곳으로 설정 C폴더안에 RPA_Common이 있어서 전 여기로 잡았습니다
//     json.dump(tokens, fp)