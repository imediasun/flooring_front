<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: openapi/v3/openapi.proto

namespace Openapi\V3;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * Generated from protobuf message <code>openapi.v3.Tag</code>
 */
class Tag extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string name = 1;</code>
     */
    protected $name = '';
    /**
     * Generated from protobuf field <code>string description = 2;</code>
     */
    protected $description = '';
    /**
     * Generated from protobuf field <code>.openapi.v3.ExternalDocs external_docs = 3;</code>
     */
    protected $external_docs = null;
    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 4;</code>
     */
    private $specification_extension;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *     @type string $description
     *     @type \Openapi\V3\ExternalDocs $external_docs
     *     @type array<\Openapi\V3\NamedAny>|\Google\Protobuf\Internal\RepeatedField $specification_extension
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Openapi\V3\Openapi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Generated from protobuf field <code>string name = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setName($var)
    {
        GPBUtil::checkString($var, True);
        $this->name = $var;

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
     * Generated from protobuf field <code>.openapi.v3.ExternalDocs external_docs = 3;</code>
     * @return \Openapi\V3\ExternalDocs|null
     */
    public function getExternalDocs()
    {
        return $this->external_docs;
    }

    public function hasExternalDocs()
    {
        return isset($this->external_docs);
    }

    public function clearExternalDocs()
    {
        unset($this->external_docs);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.ExternalDocs external_docs = 3;</code>
     * @param \Openapi\V3\ExternalDocs $var
     * @return $this
     */
    public function setExternalDocs($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\ExternalDocs::class);
        $this->external_docs = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getSpecificationExtension()
    {
        return $this->specification_extension;
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedAny specification_extension = 4;</code>
     * @param array<\Openapi\V3\NamedAny>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setSpecificationExtension($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Openapi\V3\NamedAny::class);
        $this->specification_extension = $arr;

        return $this;
    }

}

