<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Users;

/**
 */
class UserServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Users\CheckEmailRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CheckEmail(\Users\CheckEmailRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/users.UserService/CheckEmail',
        $argument,
        ['\Users\CheckEmailResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Users\SignUpRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignUp(\Users\SignUpRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/users.UserService/SignUp',
        $argument,
        ['\Users\SignUpResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Users\SignInRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function SignIn(\Users\SignInRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/users.UserService/SignIn',
        $argument,
        ['\Users\SignInResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Users\MeRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Me(\Users\MeRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/users.UserService/Me',
        $argument,
        ['\Users\MeResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * @param \Users\LogoutRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function Logout(\Users\LogoutRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/users.UserService/Logout',
        $argument,
        ['\Users\LogoutResponse', 'decode'],
        $metadata, $options);
    }

}
