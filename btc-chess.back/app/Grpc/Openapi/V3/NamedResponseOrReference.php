<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: openapi/v3/openapi.proto

namespace Openapi\V3;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Automatically-generated message used to represent maps of ResponseOrReference as ordered (name,value) pairs.
 *
 * Generated from protobuf message <code>openapi.v3.NamedResponseOrReference</code>
 */
class NamedResponseOrReference extends \Google\Protobuf\Internal\Message
{
    /**
     * Map key
     *
     * Generated from protobuf field <code>string name = 1;</code>
     */
    protected $name = '';
    /**
     * Mapped value
     *
     * Generated from protobuf field <code>.openapi.v3.ResponseOrReference value = 2;</code>
     */
    protected $value = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $name
     *           Map key
     *     @type \Openapi\V3\ResponseOrReference $value
     *           Mapped value
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Openapi\V3\Openapi::initOnce();
        parent::__construct($data);
    }

    /**
     * Map key
     *
     * Generated from protobuf field <code>string name = 1;</code>
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Map key
     *
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
     * Mapped value
     *
     * Generated from protobuf field <code>.openapi.v3.ResponseOrReference value = 2;</code>
     * @return \Openapi\V3\ResponseOrReference|null
     */
    public function getValue()
    {
        return $this->value;
    }

    public function hasValue()
    {
        return isset($this->value);
    }

    public function clearValue()
    {
        unset($this->value);
    }

    /**
     * Mapped value
     *
     * Generated from protobuf field <code>.openapi.v3.ResponseOrReference value = 2;</code>
     * @param \Openapi\V3\ResponseOrReference $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\ResponseOrReference::class);
        $this->value = $var;

        return $this;
    }

}

