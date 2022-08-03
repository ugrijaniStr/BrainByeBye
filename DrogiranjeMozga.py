import os
import pymsgbox

class DrogiranjeMozga(object):
    def start():
        list = [" ","n","w","o","d","t","u","h","s"]
        otp = 'OFWIOJFWEIJ9FJIBNFNDQON'
        sranje = []
        aha = []
        keks = len(list)
        sranje.extend(["-","s"])
        op = f'{sranje[0]}{sranje[1]}'
        for i in range(keks):
            keks -= 1
            aha.extend(list[keks])
        aha.append(op)
        hop = (''.join(aha))
        os.system(hop)
        def droksanje(x,y,z):
            print(f'{z}{y}{x}...')
        dak = len(otp) * 10
        for j in range(dak):
            droksanje('anje','kir','fa')
            if(j == (dak-1)):
                pymsgbox.alert('...', '...')

if(__name__ == "__main__"):
    DrogiranjeMozga.start()
