import openai

openai.api_key = ''


def chat(query):
    print('here')
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": query
            }
        ]
    )
    return response.choices[0].message['content']
