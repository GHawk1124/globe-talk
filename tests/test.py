import unittest

# Libraries
from googletrans import Translator
import argostranslate.package
import argostranslate.translate

class Tests(unittest.TestCase):

    def test_time_google_translate_ko_to_en(self):
        import time
        translator = Translator()
        tic = time.perf_counter()
        translate = translator.translate('안녕하세요.')
        toc = time.perf_counter()
        time = toc - tic
        print(f"Ran Translation in {time:0.4f} seconds")

def test_time_google_translate():
    import time
    translate_stuff = ['안녕하세요.','この文章は日本語で書かれました。','Tiu frazo estas skribita en Esperanto.','This sentence is written in English.']
    translator = Translator()
    tic = time.perf_counter()
    translate = translator.translate(translate_stuff)
    toc = time.perf_counter()
    time = toc - tic
    print(f"Ran Translation in avg of {(time/len(translate_stuff)):0.4f} seconds")

def test_time_argos_translate():
    import time
    from_code = "ko"
    to_code = "en"
    argostranslate.package.update_package_index()
    available_packages = argostranslate.package.get_available_packages()
    package_to_install = next(
        filter(
            lambda x: x.from_code == from_code and x.to_code == to_code, available_packages
        )
    )
    argostranslate.package.install_from_path(package_to_install.download())
    translator = Translator()
    tic = time.perf_counter()
    translatedText = argostranslate.translate.translate('안녕하세요.', from_code, to_code)
    toc = time.perf_counter()
    time = toc - tic
    print(f"Ran Translation in avg of {(time):0.4f} seconds")


if __name__ == '__main__':
    test_time_google_translate()
    test_time_argos_translate()