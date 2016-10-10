import plivo

auth_id = ""
auth_token = ""

p = plivo.RestAPI(auth_id, auth_token)

params = {
    'src': '+91', 
    'dst' : '+91', 
    'text' : "Sentinel is reminding you!!"
}

response = p.send_message(params)

print(str(response))
print(str(response[0]))
print(str(response[1]))
print (str(response[1]['message_uuid']))
print (str(response[1]['api_id']))

