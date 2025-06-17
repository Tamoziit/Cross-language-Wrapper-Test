from crosslang_wrapper_test import CrossLangWrapperTest

wrapper = CrossLangWrapperTest("sk_test_5677")

print(wrapper.is_server_alive())

print(wrapper.run_test())