from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "ACc0649fc2d3032f33e6158aab26dcdd48"
# Your Auth Token from twilio.com/console
auth_token  = "f5824f7860aa3ace594d84676307d4b9"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+15597067906",
    from_="+19896144604",
    body="Help me! I am dying. :'('")

print(message.sid)
