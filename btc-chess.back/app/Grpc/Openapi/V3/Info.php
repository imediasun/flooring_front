<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: openapi/v3/openapi.proto

namespace Openapi\V3;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 *
 * Generated from protobuf message <code>openapi.v3.Info</code>
 */
class Info extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string title = 1;</code>
     */
    protected $title = '';
    /**
     * Generated from protobuf field <code>string description = 2;</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>string terms_of_service = 3;</code>
     */
    protected $terms_of_service = '';
    /**
     * Generated from protobuf field <code>.openapi.v3.Contact contact = 4;</code>
     */
    protected $contact = null;
    /**
     * Generated from protobuf field <code>.openapi.v3.License license = 5;</code>
     */
    protected $license = null;
    /**
     * Generated from protobuf field <code>string version = 6;</code>
     */
    protected $version = '';
    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 7;</code>
     */
    private $specification_extension;
    /**
     * Generated from protobuf field <code>string summary = 8;</code>
     */
    protected $summary = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $title
     *     @type string $description
     *     @type string $terms_of_service
     *     @type \Openapi\V3\Contact $contact
     *     @type \Openapi\V3\License $license
     *     @type string $version
     *     @type array<\Openapi\V3\NamedAny>|\Google\Protobuf\Internal\RepeatedField $specification_extension
     *     @type string $summary
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Openapi\V3\Openapi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string title = 1;</code>
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Generated from protobuf field <code>string title = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTitle($var)
    {
        GPBUtil::checkString($var, True);
        $this->title = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string description = 2;</code>
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Generated from protobuf field <code>string description = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setDescription($var)
    {
        GPBUtil::checkString($var, True);
        $this->description = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string terms_of_service = 3;</code>
     * @return string
     */
    public function getTermsOfService()
    {
        return $this->terms_of_service;
    }

    /**
     * Generated from protobuf field <code>string terms_of_service = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setTermsOfService($var)
    {
        GPBUtil::checkString($var, True);
        $this->terms_of_service = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Contact contact = 4;</code>
     * @return \Openapi\V3\Contact|null
     */
    public function getContact()
    {
        return $this->contact;
    }

    public function hasContact()
    {
        return isset($this->contact);
    }

    public function clearContact()
    {
        unset($this->contact);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Contact contact = 4;</code>
     * @param \Openapi\V3\Contact $var
     * @return $this
     */
    public function setContact($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\Contact::class);
        $this->contact = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.License license = 5;</code>
     * @return \Openapi\V3\License|null
     */
    public function getLicense()
    {
        return $this->license;
    }

    public function hasLicense()
    {
        return isset($this->license);
    }

    public function clearLicense()
    {
        unset($this->license);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.License license = 5;</code>
     * @param \Openapi\V3\License $var
     * @return $this
     */
    public function setLicense($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\License::class);
        $this->license = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string version = 6;</code>
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Generated from protobuf field <code>string version = 6;</code>
     * @param string $var
     * @return $this
     */
    public function setVersion($var)
    {
        GPBUtil::checkString($var, True);
        $this->version = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 7;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSpecificationExtension()
    {
        return $this->specification_extension;
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 7;</code>
     * @param array<\Openapi\V3\NamedAny>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSpecificationExtension($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Openapi\V3\NamedAny::class);
        $this->specification_extension = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string summary = 8;</code>
     * @return string
     */
    public function getSummary()
    {
        return $this->summary;
    }

    /**
     * Generated from protobuf field <code>string summary = 8;</code>
     * @param string $var
     * @return $this
     */
    public function setSummary($var)
    {
        GPBUtil::checkString($var, True);
        $this->summary = $var;

        return $this;
    }

}

